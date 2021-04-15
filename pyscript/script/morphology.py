from typing import List, Dict, Optional, Tuple

from script import Rule, import_default_gloss, Template, Word, Sound
import random

from script.templates import _fetch_templates
import logging

LOGGER = logging.getLogger("app.logger")


class ParadigmAttr:
    def __init__(self, feature_to_sounds: Dict[str, List[Sound]]):
        import os
        self.col_count = random.randint(2, 4)
        min_row = 15
        max_row = 25
        self.row_count = random.randint(min_row, max_row)
        self.gen_type_count_map = {"CAD": round(self.row_count * 0.4), "IRR": int(self.row_count * 0.1), "NCAD": 1,
                                   "CNAD": 1, "CAND": 1}
        assist_types = ["NCAD", "CNAD", "CAND"]
        assist_count = self.row_count - sum(self.gen_type_count_map.values())

        while assist_count > 0:
            if random.random() < 0.2:
                self.gen_type_count_map["CAD"] += 1
            else:
                self.gen_type_count_map[random.choice(assist_types)] += 1
            assist_count -= 1

        transform_data = _get_trans_data(
            os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data/paradigmtransdata.txt'))
        gloss_families = [gf for gf in import_default_gloss()[0] if
                          gf.get_name() in transform_data and self.col_count in transform_data[gf.get_name()]]
        selected_family_name = random.choice(list(set([gf.get_name() for gf in gloss_families])))

        glosses = []
        for gloss_family in gloss_families:
            if gloss_family.get_name() == selected_family_name:
                for gloss_group in gloss_family.get_members():
                    glosses.extend(gloss_group.get_glosses())

        self.gloss_column = random.sample(glosses, self.row_count)
        self.col_names = transform_data[selected_family_name][self.col_count]
        self.templates = _fetch_templates(
            os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data/paradigmtranstemplates.txt'),
            list(feature_to_sounds.keys()))
        random.shuffle(self.templates)


# Transformer is currently an appending transformer
class _SuffixTransformer:
    def __init__(self, template: Optional[Template], construct_data: Optional[List[Word]],
                 feature_to_sounds: Dict[str, List[Sound]], phonemes: List[Word]):
        self._template = template

        # TODO: MODIFY HERE
        if self._template and construct_data:
            construct_word_list = []
            for construct_word in construct_data:
                construct_word_list.extend(
                    self._template.generate_words_start_with(construct_word, phonemes, 10, feature_to_sounds))
            if not construct_word_list:
                raise TransformerGenerationError
            else:
                self._mod_word = random.choice(construct_word_list)
        else:
            self._mod_word = None

    def get_mod_word(self) -> Word:
        return self._mod_word

    def transform(self, word: Word) -> Word:
        if not self._template:
            return word

        return Word(str(word) + str(self._mod_word))

    def get_template(self) -> Template:
        return self._template

    def __str__(self) -> str:
        if self._mod_word:
            return '+ ' + str(self._mod_word)
        else:
            return '+∅'


class TransformerGenerationError(Exception):
    pass


class Paradigm:
    def __init__(self, templates: List[Template], col_names: List[str], words: List[Word], rule: Rule,
                 trans_construct_data: Optional[List[Word]],
                 preset_col_data: Optional[List[Tuple[str, _SuffixTransformer]]],
                 phonemes: List[Word], feature_to_type: Dict[str, str], feature_to_sounds: Dict[str, List[Sound]]):
        if preset_col_data is None:
            self._col_data = []

            if random.random() < 0.5 or len(templates) == len(col_names) - 1:
                self._col_data.append((col_names[0], _SuffixTransformer(None, None, feature_to_sounds, phonemes)))
                col_names = col_names[1:]

            if len(templates) < len(col_names):
                raise ValueError('Not enough templates for each transformation!')

            for i in range(len(col_names)):
                regen_limit = 100
                while regen_limit > 0:
                    chosen_template = random.choice(templates)
                    try:
                        self._col_data.append(
                            (col_names[i],
                             _SuffixTransformer(chosen_template, trans_construct_data, feature_to_sounds, phonemes)))
                        break
                    except TransformerGenerationError:
                        regen_limit -= 1
                        continue
                if regen_limit <= 0:
                    LOGGER.error("Suffix transformer initialization failed! (All templates mismatch?)")
                    raise TransformerGenerationError(
                        "Suffix transformer initialization failed! (All templates mismatch?)")
        else:
            self._col_data = preset_col_data

        self.UR_words = [rule.apply(word, phonemes, feature_to_type, feature_to_sounds)[0] for word in words]
        self._trans_UR_words = []
        self.UR_trans_pattern = []
        self.trans_names = []
        self.applied_core_data = []
        self._transformers = []

        for col_data in self._col_data:
            self.trans_names.append(col_data[0])
            self._transformers.append(col_data[1])
            self.UR_trans_pattern.append(str(col_data[1]))

        for word in self.UR_words:
            applied_row_list = []
            trans_row_list = []

            for col_i in range(len(self._transformers)):
                transformer = self._transformers[col_i]
                transformed_word = transformer.transform(word)
                trans_row_list.append(transformed_word)
                apply_data = rule.apply(transformed_word, phonemes, feature_to_type, feature_to_sounds)
                applied_row_list.append(apply_data[0])

            self.applied_core_data.append(applied_row_list)
            self._trans_UR_words.append(trans_row_list)

    def get_ur_words(self) -> List[Word]:
        return self.UR_words

    def get_col_data(self) -> List[Tuple[str, _SuffixTransformer]]:
        return self._col_data

    def valid_row_indexes(self) -> List[int]:
        num_rows = len(self.applied_core_data)
        num_cols = len(self.applied_core_data[0])
        row_check = {}
        for r_i in range(num_rows):
            row_check[r_i] = []
        col_check = [0 for _ in range(num_cols)]

        for r_index in range(num_rows):
            for c_index in range(num_cols):
                if self._trans_UR_words[r_index][c_index] != self.applied_core_data[r_index][c_index]:
                    row_check[r_index].append(c_index)
                    col_check[c_index] += 1

        for c_i in range(num_cols):
            if c_i >= num_rows:
                for r_i in range(num_rows):
                    row_check[r_i].remove(c_i)

        valid_rows = []
        for r_i in row_check:
            if len(row_check[r_i]) > 0:
                valid_rows.append(r_i)
        return valid_rows

    def __str__(self) -> str:
        matrix_str = ""
        max_strlen = max(
            [len(self.applied_core_data[r][c]) for r in range(len(self.applied_core_data)) for c in
             range(len(self.applied_core_data[0]))] +
            [len(tn) for tn in self.trans_names])

        matrix_str += "%s  %s\n" % (
            _pad_str("base", max_strlen), "  ".join([_pad_str(str(w), max_strlen) for w in self.trans_names]))
        matrix_str += "%s  %s\n" % (
            _pad_str("---", max_strlen), "  ".join([_pad_str(str(w), max_strlen) for w in self.UR_trans_pattern]))

        for r in range(len(self.applied_core_data)):
            matrix_str += "%s  %s\n" % (_pad_str(str(self.UR_words[r]), max_strlen),
                                        "  ".join([_pad_str(str(w), max_strlen) for w in self.applied_core_data[r]]))

        return matrix_str


class ParadigmGenerator:
    def __init__(self, paradigm_attr: ParadigmAttr, rule: Rule, phonemes: List[Word], templates: List[Template],
                 feature_to_type: Dict[str, str], feature_to_sounds: Dict[str, List[Sound]]):
        self._phonemes = phonemes
        self._feature_to_type = feature_to_type
        self._feature_to_sounds = feature_to_sounds
        self._rule = rule
        self._templates = templates
        self._attr = paradigm_attr

    def _generate_base_words(self, gen_size: int, construct_data_list: List[Word]) -> List[Word]:
        num_templates = len(self._templates)
        word_list = []
        gen_unit_size = max(5, gen_size // num_templates // len(construct_data_list))

        for i in range(num_templates):
            for data_word in construct_data_list:
                template_gen = self._templates[i].generate_words_end_with(data_word, self._phonemes, gen_unit_size,
                                                                          self._feature_to_sounds)
                if template_gen is not None:
                    word_list.extend(template_gen)

        total_random_word_count = max(10, gen_size // 10)
        each_template_word_count = max(2, gen_size // 10 // len(self._templates))
        for _ in range(total_random_word_count):
            word_list.extend(random.choice(self._templates).generate_word_list(self._phonemes, each_template_word_count,
                                                                               self._feature_to_sounds))
        random.shuffle(word_list)
        return word_list

    def _get_valid_question(self, shuffled: bool) -> Optional[Paradigm]:
        num_rows = self._attr.row_count
        gen_size = num_rows * 20
        retry_limit = 2
        trial = 0

        while trial < retry_limit:
            construct_data = construct_suffix_morph_words(self._rule, self._phonemes, self._feature_to_sounds)
            # currently only suffix
            print(construct_data)
            if len(construct_data) == 1:
                word_list = self._generate_base_words(gen_size, construct_data[0][0])
                trans_word_list = construct_data[0][1]
            else:
                word_list = self._generate_base_words(gen_size // 2, construct_data[0][0]) + self._generate_base_words(
                    gen_size // 2, construct_data[1][0])
                trans_word_list = construct_data[0][1] + construct_data[1][1]

            paradigm = Paradigm(self._attr.templates, self._attr.col_names, word_list, self._rule, trans_word_list,
                                None, self._phonemes, self._feature_to_type, self._feature_to_sounds)

            gen_size = len(word_list)
            valid_rows = paradigm.valid_row_indexes()
            valid_count = len(valid_rows)
            valid_need = num_rows // 2
            invalid_need = num_rows // 2

            if valid_count < valid_need:
                LOGGER.warning("Insufficient valid data. Need %d Found %d.\n" % (valid_need, valid_count))
                trial += 1
                continue
            elif valid_count == gen_size:
                LOGGER.warning("No invalid data found. Retrying.\n")
                trial += 1
                continue
            elif gen_size - valid_count < invalid_need:
                LOGGER.warning(
                    "Insufficient invalid data. Need %d Found %d.\n" % (invalid_need, gen_size - valid_count))
                trial += 1
                continue
            else:
                dest_word_list = []

                for r_index in valid_rows[:valid_need]:
                    dest_word_list.append(word_list[r_index])

                for i in range(len(word_list)):
                    if i not in valid_rows:
                        dest_word_list.append(word_list[i])

                    if len(dest_word_list) == num_rows:
                        break

                if shuffled:
                    random.shuffle(dest_word_list)

                paradigm = Paradigm(self._attr.templates, self._attr.col_names, dest_word_list, self._rule, None,
                                    paradigm.get_col_data(), self._phonemes, self._feature_to_type,
                                    self._feature_to_sounds)

                LOGGER.info("Success! Raw Paradigm Data:\n%s\n" % str(paradigm))
                return paradigm

        LOGGER.error("base generation size %d\n" % gen_size)
        LOGGER.error("Rule %s\n" % str(self._rule))
        LOGGER.error("Phoneme %s\n" % str(self._phonemes))
        LOGGER.error("Exceeded maximum retry limit. Failed to find a question!\n")
        return None

    def get_paradigm_question(self, shuffled: bool, isIPAg: bool, feature_to_type: Dict[str, str],
                              feature_to_sounds: Dict[str, List[Sound]]) -> Optional[Dict]:
        question = self._get_valid_question(shuffled)

        if question is None:
            return None

        poi = " ".join(self._rule.get_interest_phones(self._phonemes, feature_to_type, feature_to_sounds)[1])

        if isIPAg:
            question_data = {
                'header_row': [str(w).replace('g', 'ɡ') for w in question.trans_names],
                'trans_patterns': [str(w).replace('g', 'ɡ') for w in question.UR_trans_pattern],
                'ur_words': [str(w).replace('g', 'ɡ') for w in question.UR_words],
                'core_data': [[str(w).replace('g', 'ɡ') for w in row] for row in question.applied_core_data],
                'rule': str(self._rule),
                'phonemes': [str(w) for w in self._phonemes],
                'templates': str(self._templates),
                'Gloss': [str(w) for w in self._attr.gloss_column],
                'poi': poi.replace('g', 'ɡ')
            }
        else:
            question_data = {
                'header_row': [str(w) for w in question.trans_names],
                'trans_patterns': [str(w) for w in question.UR_trans_pattern],
                'ur_words': [str(w) for w in question.UR_words],
                'core_data': [[str(w) for w in row] for row in question.applied_core_data],
                'rule': str(self._rule),
                'phonemes': [str(w) for w in self._phonemes],
                'templates': str(self._templates),
                'Gloss': [str(w) for w in self._attr.gloss_column],
                'poi': poi
            }

        LOGGER.debug(question_data)
        return question_data


def _get_trans_data(filename: str):
    types = {}

    with open(filename, encoding='utf-8') as data_file:
        lines = [l.rstrip() for l in data_file.readlines()]
        curr_key = None

        for line in lines:
            line = line.replace('ɡ', 'g')

            if len(line) == 0:
                continue

            if line.startswith("### "):
                curr_key = line.lstrip("### ")
                continue

            if not curr_key:
                raise ValueError('Must have a line starts with "### " to define gloss family type.')

            if curr_key not in types:
                types[curr_key] = {}

            trans_types = line.split(',')
            target_size = int(trans_types[0])

            assert len(trans_types) == target_size + 1

            types[curr_key][target_size] = trans_types[1:]

    return types


def construct_suffix_morph_words(rule: Rule, phonemes: Optional[List[Word]],
                                 feature_to_sounds: Dict[str, List[Sound]]):
    # can not have edges
    c_matchers = rule.get_c_matchers(phonemes, feature_to_sounds)
    d_matchers = rule.get_d_matchers(phonemes, feature_to_sounds)
    cd_index = random.randint(0, len(c_matchers) - 1)
    c_matcher = c_matchers[cd_index]
    d_matcher = d_matchers[cd_index]
    a_matcher = rule.get_a_matcher(phonemes, None, feature_to_sounds)

    if len(c_matcher) == 0 and len(d_matcher) == 0:
        raise ValueError("Impossible to have both cmatcher and dmatcher to be empty")

    if len(c_matcher) == 0:
        return [(a_matcher, d_matcher)]

    if len(d_matcher) == 0:
        return [(c_matcher, a_matcher)]

    return [(c_matcher, [Word(str(a) + str(d)) for a in a_matcher for d in d_matcher]),
            ([Word(str(c) + str(a)) for a in a_matcher for c in c_matcher], d_matcher)]


def _pad_str(org_str: str, padding_size: int) -> str:
    while len(org_str) < padding_size:
        org_str += " "

    return org_str
