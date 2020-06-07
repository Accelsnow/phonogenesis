from __future__ import annotations

from typing import List, Optional, Dict, Tuple
from enum import Enum, IntEnum
from abc import ABCMeta, abstractmethod

from script import Word, Rule, ExampleType, Sound, Template, Generator, GenMode


class InteractionOrder(Enum):
    Feeding = 0,
    Bleeding = 1,
    CounterFeeding = 2,
    CounterBleeding = 3

    def __str__(self) -> str:
        return self.name


class DoubleWordType(IntEnum):
    """
    Double rule has type FEEDING / BLEEDING:
    FEEDING:
    TYPE 0: UR -> R2 NT -> R1 T -> R2 T
    TYPE 1: UR -> R2 NT -> R1 T -> R2 NT
    TYPE 2: UR -> R2 T
    TYPE 3: OTHER

    BLEEDING:
    TYPE 0: UR -> R2 T -> R1 T -> R2 NT
    TYPE 1: UR -> R2 NT -> R1 T -> R2 NT
    TYPE 2: UR -> R2 T -> R1 NT
    TYPE 3: OTHER
    """
    Type0 = 0,
    Type1 = 1,
    Type2 = 2,
    Type3 = 3

    def __str__(self) -> str:
        return self.name


class DoubleRule(metaclass=ABCMeta):
    _rule1: Rule
    _rule2: Rule
    _difficulty: int
    _difficulty_to_percent: Dict[int, Tuple[float, float, float, float]]
    _interactOrder: InteractionOrder
    _phonemes: List[Word]
    _templates: List[Template]
    _feature_to_type: Dict[str, str]
    _feature_to_sounds: Dict[str, List[Sound]]

    def __init__(self, rule1: Rule, rule2: Rule, order: Optional[InteractionOrder, None], difficulty: int,
                 phonemes: List[Word], templates: List[Template], feature_to_type: Dict[str, str],
                 feature_to_sounds: Dict[str, List[Sound]]) -> None:
        self._rule1 = rule1
        self._rule2 = rule2
        self._difficulty = difficulty
        self._phonemes = phonemes
        self._feature_to_type = feature_to_type
        self._feature_to_sounds = feature_to_sounds
        self._templates = templates

        self._difficulty_to_percent = {
            5: (0.3, 0.3, 0.3, 0.1)
        }

        if order is None:
            pass  # TODO: When order is not given, need order identifier
        else:
            self._interactOrder = order

    @abstractmethod
    def generate(self):
        raise NotImplementedError

    @abstractmethod
    def get_word_type(self, word: Word, one_trans: Optional[None, bool],
                      two_trans: Optional[None, bool]) -> DoubleWordType:
        raise NotImplementedError

    def get_rule1(self) -> Rule:
        return self._rule1

    def get_rule2(self) -> Rule:
        return self._rule2

    def get_order(self) -> InteractionOrder:
        return self._interactOrder


class DoubleFeed(DoubleRule):
    """
    FEEDING:
    TYPE 0: UR -> R2 NT -> R1 T -> R2 T
    TYPE 1: UR -> R2 NT -> R1 T -> R2 NT
    TYPE 2: UR -> R2 T
    """
    _gen2: Generator

    def __init__(self, rule1: Rule, rule2: Rule, order: Optional[InteractionOrder, None], difficulty: int,
                 phonemes: List[Word], templates: List[Template], feature_to_type: Dict[str, str],
                 feature_to_sounds: Dict[str, List[Sound]]) -> None:
        DoubleRule.__init__(self, rule1, rule2, order, difficulty, phonemes, templates, feature_to_type,
                            feature_to_sounds)

        self._gen2 = Generator(phonemes, templates, rule2, 5, feature_to_type, feature_to_sounds)

    def get_word_type(self, word: Word, one_trans: Optional[None, bool],
                      two_trans: Optional[None, bool]) -> DoubleWordType:
        if two_trans or (two_trans is None and self._rule2.apply(word, self._phonemes, self._feature_to_type,
                                                                 self._feature_to_sounds) != word):
            return DoubleWordType.Type2

        print("org: ", word)
        if one_trans is None:
            word_1t = self._rule1.apply(word, self._phonemes, self._feature_to_type, self._feature_to_sounds)
        else:
            word_1t = None
        print("1t: ", word_1t)

        if one_trans or (one_trans is None and word_1t != word):
            word_12t = self._rule2.apply(word_1t, self._phonemes, self._feature_to_type, self._feature_to_sounds)
            print("12t: ", word_12t)

            if word_1t != word_12t:
                return DoubleWordType.Type0
            else:
                return DoubleWordType.Type1

        return DoubleWordType.Type3

    def generate(self, **kwargs):
        data2 = self._gen2.generate(GenMode.rawData, 40, True, False, self._feature_to_type, self._feature_to_sounds,
                                    None)

        t2 = data2["CADT"] + data2["CADNT"]
        nt2 = data2["CAND"] + data2["NCAD"] + data2["IRR"]

        print([str(w) for w in t2])
        print([str(w) for w in nt2])

        result = {DoubleWordType.Type0: [], DoubleWordType.Type1: [], DoubleWordType.Type2: [],
                  DoubleWordType.Type3: []}

        for word in nt2:
            type_ = self.get_word_type(word, None, False)
            print(type_)
            result[type_].append(str(word))

        for word in t2:
            type_ = self.get_word_type(word, None, True)
            result[type_].append(str(word))

        return result
