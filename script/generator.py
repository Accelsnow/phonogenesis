from __future__ import annotations

import random
from typing import List, Tuple, Dict, Optional, Any

from script import Word, Rule, ExampleType, Sound, Template, GlossGroup
import logging

WORD_POOL_DEFAULT_SIZE = 300
IRR_PERCENTAGE = 0.1
RELATED_PERCENTAGE = 0.9
EXCLUSION_TYPES = [ExampleType.CADT, ExampleType.CADNT]
LOGGER = logging.getLogger("app.logger")


class Generator:
    _difficulty: int  # 0- 10
    _difficulty_to_percent: Dict[int, Tuple[float, float, float, float, float]]
    _templates: List[Template]
    _rule: Rule
    _dict_initialized: bool
    _phonemes: List[Word]
    _CADT: List[Dict[Word, List[Word]]]
    _CADNT: List[Dict[Word, List[Word]]]
    _CAND: List[Dict[Word, List[Word]]]
    _NCAD: List[Dict[Word, List[Word]]]
    _IRR: List[Dict[Word, List[Word]]]
    _duplicate_exclusion: List[Word]
    _unid: int

    def __init__(self, phonemes: List[Word], templates: List[Template], rule: Rule, difficulty: int,
                 feature_to_type: Dict[str, str], feature_to_sounds: Dict[str, List[Sound]]) -> None:
        self._templates = templates
        self._rule = rule
        self._CADT = []
        self._CADNT = []
        self._CAND = []
        self._NCAD = []
        self._IRR = []
        self._dict_initialized = False
        self._phonemes = phonemes
        self._duplicate_exclusion = []
        self._unid = random.getrandbits(30)

        self._difficulty_to_percent = {
            5: (0.4, 0.1, 0.2, 0.2, 0.1)
        }

        self._difficulty = difficulty
        self._expand_library(WORD_POOL_DEFAULT_SIZE, feature_to_type, feature_to_sounds)

    def _expand_library(self, pool_size: int, feature_to_type: Dict[str, str],
                        feature_to_sounds: Dict[str, List[Sound]]):
        template_pool_size = pool_size / len(self._templates)
        generation_summary = {ExampleType.CADT: 0, ExampleType.CADNT: 0, ExampleType.CAND: 0, ExampleType.NCAD: 0,
                              ExampleType.IRR: 0}
        irr_size = round(template_pool_size * IRR_PERCENTAGE)
        related_size = round(template_pool_size * RELATED_PERCENTAGE)

        a_matcher = self._rule.get_a_matcher(self._phonemes, None, feature_to_sounds)
        cd_validated = self._rule.validate_cd(self._phonemes, feature_to_sounds)

        if len(a_matcher) == 0 or a_matcher == [] or not cd_validated:
            raise GenerationNoCADTError(self)

        irr_phoneme = [w for w in self._phonemes if w not in a_matcher]

        for template in self._templates:
            irr_word_list = template.generate_word_list(irr_phoneme, irr_size, feature_to_sounds, None)
            related_word_list = template.generate_word_list(self._phonemes, related_size, feature_to_sounds, a_matcher)

            random.shuffle(irr_word_list)

            # RELATED

            for word in related_word_list:
                classify_data = self._rule.classify(word, self._phonemes, feature_to_type, feature_to_sounds)
                records = []  # type: List[Tuple[ExampleType, Dict[Word, List[Word]], Word, Word]]
                exclusion_lock = False
                no_irr = False

                for index in range(0, len(classify_data)):
                    data = classify_data[index]

                    if not self._dict_initialized:
                        self._CADT.append({})
                        self._CADNT.append({})
                        self._CAND.append({})
                        self._NCAD.append({})
                        self._IRR.append({})

                    if ExampleType.IRR in data:
                        raise GeneratorError(self,
                                             "Related word list should never have IRR type. Related word list: %s || Word: %s" % (
                                                 [str(w) for w in related_word_list], word))
                    elif ExampleType.CADT in data:
                        inherited = [r for r in records if r[0] == ExampleType.CADT]
                        inherited.append((ExampleType.CADT, self._CADT[index], data[ExampleType.CADT], word))
                        records = inherited
                        no_irr = True
                        break

                    if ExampleType.CADNT in data:
                        inherited = [r for r in records if r[0] == ExampleType.CADNT]
                        inherited.append((ExampleType.CADNT, self._CADNT[index], data[ExampleType.CADNT], word))
                        records = inherited
                        exclusion_lock = True
                        no_irr = True

                    if not exclusion_lock:
                        if ExampleType.CAND in data:
                            records.append((ExampleType.CAND, self._CAND[index], data[ExampleType.CAND], word))
                            no_irr = True

                        if ExampleType.NCAD in data:
                            records.append((ExampleType.NCAD, self._NCAD[index], data[ExampleType.NCAD], word))
                            no_irr = True

                for record in records:
                    generation_summary[record[0]] += 1

                    if record[0] != ExampleType.IRR or not no_irr:
                        self._dict_add(record[1], record[2], record[3])

                self._dict_initialized = True

            # IRR

            for word in irr_word_list:
                generation_summary[ExampleType.IRR] += 1

                for index in range(0, len(self._IRR)):
                    self._dict_add(self._IRR[index], Word(''), word)

        # TODO print(generation_summary)

    @staticmethod
    def _dict_add(dic: Dict[Word, List[Word]], key: Word, value: Word) -> None:
        if key in dic:
            if value not in dic[key]:
                dic[key].append(value)
        else:
            dic[key] = [value]

    def get_difficulty(self) -> int:
        return self._difficulty

    def get_templates(self) -> List[Template]:
        return [t for t in self._templates]

    def get_phonemes(self) -> List[Word]:
        return self._phonemes

    def get_rule(self) -> Rule:
        return self._rule

    def change_difficulty(self, target_difficulty: int) -> None:
        self._difficulty = target_difficulty

    def _get_num(self, amount: int) -> Tuple[int, int, int, int, int]:
        diff_data = self._difficulty_to_percent[self._difficulty]
        cadt = round(amount * diff_data[0])
        cadnt = round(amount * diff_data[1])
        cand = round(amount * diff_data[2])
        ncad = round(amount * diff_data[3])
        irr = round(amount * diff_data[4])

        if cadt + cadnt + cand + ncad + irr > amount:
            irr -= 1

        # TODO print("\nExpected Number:", "CADT", cadt, "CADNT", cadnt, "CAND", cand, "NCAD", ncad, "IRR", irr)
        return cadt, cadnt, cand, ncad, irr

    @staticmethod
    def _get_dist_values(dic: Dict[Word, List[Word]]) -> List[Word]:
        existed = []

        for lst in dic.values():
            for item in lst:
                if item not in existed:
                    existed.append(item)

        return existed

    def _generate_words(self, amount: int, dic: Dict[Word, List[Word]]) -> List[Word]:
        if amount == 0:
            return []

        words = []
        rand_keys = list(dic)
        curr_index = 0
        continue_find = True
        empty_run = 0
        prev_len = None

        for key in rand_keys:
            random.shuffle(dic[key])

        while continue_find:
            random.shuffle(rand_keys)

            for key in rand_keys:
                value_lst = dic[key]

                if curr_index < len(value_lst):
                    chosen = value_lst[curr_index]

                    if chosen not in words and chosen not in self._duplicate_exclusion:
                        words.append(chosen)

                        if len(words) >= amount:
                            continue_find = False
                            break

            if prev_len is None:
                prev_len = len(words)
            elif prev_len == len(words):
                empty_run += 1

            if empty_run >= 10:
                break

            curr_index += 1

        self._duplicate_exclusion.extend(words)
        return words

    def _generate_helper(self, dic: Dict[Word, List[Word]], amount: int, name: str, feature_to_type: Dict[str, str],
                         feature_to_sounds: Dict[str, List[Sound]]) -> List[Word]:
        if amount == 0:
            return []

        vals = self._get_dist_values(dic)

        if len(vals) == 0:
            LOGGER.debug("No %s type found.(%d required, 0 found)\n %s" % (name, amount, self.get_log_stamp()))
            return []

        if len(vals) >= amount:
            words = self._generate_words(amount, dic)
            return words
        else:
            LOGGER.debug(
                "Insufficient amount of %s type.(%d required, %d found), expanding library\n %s" % (
                    name, amount, len(vals), self.get_log_stamp()))
            self._expand_library(WORD_POOL_DEFAULT_SIZE, feature_to_type, feature_to_sounds)
            self._duplicate_exclusion.extend(vals)
            vals.extend(self._generate_helper(dic, amount - len(vals), name, feature_to_type, feature_to_sounds))
            return vals

    def get_log_stamp(self):
        return "%s \n %s \n %s \n @%d" % (
            str(self._rule), [str(w) for w in self._phonemes], [str(t) for t in self._templates], self._unid)

    def generate(self, amount: Optional[int, List[int]], is_fresh: bool, is_shuffled: bool,
                 feature_to_type: Dict[str, str], feature_to_sounds: Dict[str, List[Sound]],
                 gloss_groups: List[GlossGroup]) -> Optional[
        Dict[str, Any], None]:
        """

        :param is_shuffled:
        :param amount: single int representing total generation amount (distribution by proportion), or a int list
                       representing amount for each type
        :param is_fresh: true will erase all current duplicate exclusions
        :param feature_to_type:
        :param feature_to_sounds:
        :param gloss_groups:
        :return:
        """

        if is_fresh:
            self._duplicate_exclusion = []

        ur_words = []  # type: List[Word]
        sr_words = []  # type: List[Word]
        generation_amounts = [0, 0, 0, 0, 0]  # type: List[int]
        split_size = len(self._CADT)

        if type(amount) == int:
            cadt_num, cadnt_num, cand_num, ncad_num, irr_num = self._get_num(round(amount / split_size))
        elif type(amount) == list:
            if len(amount) < 5 or False in [type(i) == int for i in amount]:
                raise GeneratorParameterError(self, amount, "amount given in list should be in format int[5] > 0")
            cadt_num, cadnt_num, cand_num, ncad_num, irr_num = amount[0], amount[1], amount[2], amount[
                3], amount[4]
        else:
            raise GeneratorParameterError(self, amount, "amount must be either int list or int")

        LOGGER.debug("REQUEST: PIECES %d CADT %d CADNT %d CAND %d NCAD %d IRR %d\n" % (
            split_size, cadt_num, cadnt_num, cand_num, ncad_num, irr_num))
        run_count = 1
        is_failed = False
        underlying_rep = None
        surface_rep = None

        for index in range(0, split_size):

            # this layer to transfer failed number to next run
            for _ in range(0, run_count):
                cadt_words = self._generate_helper(self._CADT[index], cadt_num, "CADT", feature_to_type,
                                                   feature_to_sounds)
                cadnt_words = self._generate_helper(self._CADNT[index], cadnt_num, "CADNT", feature_to_type,
                                                    feature_to_sounds)
                cand_words = self._generate_helper(self._CAND[index], cand_num, "CAND", feature_to_type,
                                                   feature_to_sounds)
                ncad_words = self._generate_helper(self._NCAD[index], ncad_num, "NCAD", feature_to_type,
                                                   feature_to_sounds)
                irr_words = self._generate_helper(self._IRR[index], irr_num, "IRR", feature_to_type, feature_to_sounds)

                # FINISH RANDOM PICK
                cadt_res, cadnt_res, cand_res, ncad_res, irr_res = len(cadt_words), len(cadnt_words), len(
                    cand_words), len(ncad_words), len(irr_words)

                LOGGER.debug("1ST GET: PCS_INDEX %d CADT %d CADNT %d CAND %d NCAD %d IRR %d\n" % (
                    index, len(cadt_words), len(cadnt_words), len(cand_words), len(ncad_words), len(irr_words)))

                if cadt_res == 0 and cadt_num > 0:
                    LOGGER.warning(
                        "Condition Index %d does not have any related data\n %s" % (index, self.get_log_stamp()))
                    run_count += 1
                    is_failed = True
                    break

                if irr_res == 0 and irr_num > 0:
                    cadt_words.extend(
                        self._generate_helper(self._CADT[index], irr_num, "CADT", feature_to_type, feature_to_sounds))

                if cadnt_res == 0 and cadnt_num > 0:
                    cadt_words.extend(
                        self._generate_helper(self._CADT[index], cadnt_num, "CADT", feature_to_type, feature_to_sounds))

                if cand_res == 0 and cand_num > 0:
                    if ncad_res == 0:
                        cadt_words.extend(
                            self._generate_helper(self._CADT[index], cand_num, "CADT", feature_to_type,
                                                  feature_to_sounds))
                    else:
                        ncad_words.extend(self._generate_helper(self._NCAD[index], cand_num, "NCAD", feature_to_type,
                                                                feature_to_sounds))

                if ncad_res == 0 and ncad_num > 0:
                    if cand_res == 0:
                        cadt_words.extend(self._generate_helper(self._CADT[index], ncad_num, "CADT", feature_to_type,
                                                                feature_to_sounds))
                    else:
                        cand_words.extend(self._generate_helper(self._CAND[index], ncad_num, "CAND", feature_to_type,
                                                                feature_to_sounds))

                LOGGER.debug("2ND GET: PCS_INDEX %d CADT %d CADNT %d CAND %d NCAD %d IRR %d\n" % (
                    index, len(cadt_words), len(cadnt_words), len(cand_words), len(ncad_words), len(irr_words)))

                # TODO print("\nActual Number:", "CADT", len(cadt_words), "CADNT", len(cadnt_words),
                generation_amounts[0] += len(cadt_words)
                generation_amounts[1] += len(cadnt_words)
                generation_amounts[2] += len(cand_words)
                generation_amounts[3] += len(ncad_words)
                generation_amounts[4] += len(irr_words)

                ur_words.extend(cadt_words)
                ur_words.extend(cadnt_words)
                ur_words.extend(cand_words)
                ur_words.extend(ncad_words)
                ur_words.extend(irr_words)

                if is_shuffled:
                    random.shuffle(ur_words)

                if not is_failed:
                    run_count = 1
                else:
                    is_failed = False

                for word in ur_words:
                    sr_words.append(self._rule.apply(word, self._phonemes, feature_to_type, feature_to_sounds))

                size = len(ur_words)

                gloss_words = [w.pick() for w in random.sample(gloss_groups, size)]

                underlying_rep = [(ur_words[i], gloss_words[i]) for i in range(0, size)]
                surface_rep = [(sr_words[i], gloss_words[i]) for i in range(0, size)]

        if underlying_rep is None or surface_rep is None:
            raise GenerationNoCADTError(self)

        return {"UR": underlying_rep, "SR": surface_rep, "rule": self._rule, "templates": self._templates,
                "phonemes": self._phonemes, "gen_sum": generation_amounts}


class GeneratorError(Exception):
    def __init__(self, generator: Generator, message: str) -> None:
        super(GeneratorError, self).__init__("%s \n %s\n" % (message, generator.get_log_stamp()))


class GeneratorParameterError(GeneratorError):
    def __init__(self, generator: Generator, bad_param: Any, message: str) -> None:
        super(GeneratorParameterError, self).__init__(generator, "%s Got: %s" % (message, str(bad_param)))


class GenerationNoCADTError(GeneratorError):
    def __init__(self, generator: Generator) -> None:
        super(GenerationNoCADTError, self).__init__(generator, "No CADT found with associated phoneme!")
