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
    • apply rule2 to UR, count how many changes it makes (X)
    • apply rule1 to UR, count how many changes it makes (Y)
    • apply rule2 to output of rule1(UR), count how many changes it makes (Z)

    Then:
    if X=Z=0 and Y>0, this is rule1 only (your Type 1)
    if X=Z>0 and Y=0, this is rule2 only (your Type 2)
    if X<Z and Y>0, this is both rules with feeding (your Type 0)
    if X=Z>0 and Y>0, this is both rules without feeding (a mix of Type 1 and Type 2, call it Type 3)
    if X=Z=0 and Y=0, this is neither rule (your Type 4)

    """
    Type0 = 0,
    Type1 = 1,
    Type2 = 2,
    Type3 = 3,
    Type4 = 4

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

    def __init__(self, rule1: Rule, rule2: Rule, order: InteractionOrder, is_counter: bool,
                 difficulty: int, phonemes: List[Word], templates: List[Template], feature_to_type: Dict[str, str],
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

        if is_counter:
            if order == InteractionOrder.Feeding:
                self._interactOrder = InteractionOrder.CounterFeeding
            elif order == InteractionOrder.Bleeding:
                self._interactOrder = InteractionOrder.CounterBleeding
            else:
                self._interactOrder = order
        else:
            self._interactOrder = order

    @abstractmethod
    def generate(self):
        raise NotImplementedError

    @abstractmethod
    def get_word_type(self, word: Word) -> DoubleWordType:
        raise NotImplementedError

    def get_rule1(self) -> Rule:
        return self._rule1

    def get_rule2(self) -> Rule:
        return self._rule2

    def get_order(self) -> InteractionOrder:
        return self._interactOrder


class DoubleFeed(DoubleRule):
    """
    • apply rule2 to UR, count how many changes it makes (X)
    • apply rule1 to UR, count how many changes it makes (Y)
    • apply rule2 to output of rule1(UR), count how many changes it makes (Z)

    Then:
    if X=Z=0 and Y>0, this is rule1 only (your Type 1)
    if X=Z>0 and Y=0, this is rule2 only (your Type 2)
    if X<Z and Y>0, this is both rules with feeding (your Type 0)
    if X=Z>0 and Y>0, this is both rules without feeding (a mix of Type 1 and Type 2, call it Type 3)
    if X=Z=0 and Y=0, this is neither rule (your Type 4)

    """
    _gen2: Generator
    _gen1: Generator

    def __init__(self, rule1: Rule, rule2: Rule, order: InteractionOrder, is_counter: bool, difficulty: int,
                 phonemes: List[Word], templates: List[Template], feature_to_type: Dict[str, str],
                 feature_to_sounds: Dict[str, List[Sound]]) -> None:
        DoubleRule.__init__(self, rule1, rule2, order, is_counter, difficulty, phonemes, templates, feature_to_type,
                            feature_to_sounds)

        self._gen2 = Generator(phonemes, templates, rule2, 5, feature_to_type, feature_to_sounds,
                               special_interests=rule1.get_a_matcher(phonemes, None, feature_to_sounds))
        self._gen1 = Generator(phonemes, templates, rule1, 5, feature_to_type, feature_to_sounds,
                               special_interests=rule2.get_a_matcher(phonemes, None, feature_to_sounds))

    def get_word_type(self, word: Word) -> DoubleWordType:
        word2, ct2 = self._rule2.apply(word, self._phonemes, self._feature_to_type, self._feature_to_sounds)
        word1, ct1 = self._rule1.apply(word, self._phonemes, self._feature_to_type, self._feature_to_sounds)
        word2to1, ct2to1 = self._rule2.apply(word1, None, self._feature_to_type, self._feature_to_sounds)

        if ct2 == ct2to1 == 0 and ct1 > 0:
            return DoubleWordType.Type1

        if ct2 == ct2to1 > 0 and ct1 == 0:
            return DoubleWordType.Type2

        if ct2 < ct2to1 and ct1 > 0:
            return DoubleWordType.Type0

        if ct2 == ct2to1 > 0 and ct1 > 0:
            return DoubleWordType.Type3

        if ct2 == ct2to1 == 0 and ct1 == 0:
            return DoubleWordType.Type4

        raise TypeError("Unidentified double word type with ct2 %d, ct1 %d, ct2to1 %d" % (ct2, ct1, ct2to1))

    def generate(self, **kwargs):
        data2 = self._gen2.generate(GenMode.rawData, 50, True, False, self._feature_to_type, self._feature_to_sounds,
                                    None)
        data1 = self._gen1.generate(GenMode.rawData, 50, True, False, self._feature_to_type, self._feature_to_sounds,
                                    None)

        result = {DoubleWordType.Type0: [], DoubleWordType.Type1: [], DoubleWordType.Type2: [],
                  DoubleWordType.Type3: [], DoubleWordType.Type4: []}

        words2 = data2["CADT"] + data2["CADNT"] + data2["CAND"] + data2["NCAD"] + data2["IRR"]
        words1 = data1["CADT"] + data1["CADNT"] + data1["CAND"] + data1["NCAD"] + data1["IRR"]

        for word in words2:
            type_ = self.get_word_type(word)
            result[type_].append(str(word))

        for word in words1:
            type_ = self.get_word_type(word)
            result[type_].append(str(word))

        return result
