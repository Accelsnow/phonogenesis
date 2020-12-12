from typing import List, Dict, Optional

from script import Rule, import_default_gloss, Template, Word, Sound, Generator, GenMode
import random

from script.templates import _fetch_templates


class ParadigmAttr:
    def __init__(self, feature_to_sounds: Dict[str, List[Sound]], phonemes: List[Word]):
        self.col_count = random.randint(2, 4)
        min_row = (30 // self.col_count) + 1
        max_row = 40 // self.col_count
        self.row_count = random.randint(min_row, max_row)

        transform_data = _get_trans_data('data/paradigmtransdata.txt')
        gloss_families = import_default_gloss()[0]
        candidate_families = [gf for gf in gloss_families if
                              gf.get_name() in transform_data and self.col_count in transform_data[gf.get_name()]]

        glosses = []
        selected_family = None
        while len(glosses) < self.row_count:
            selected_family = random.choice(candidate_families)
            candidate_groups = selected_family.get_members()
            glosses = []
            for group in candidate_groups:
                glosses.extend(group.get_glosses())

        self.gloss_column = random.sample(glosses, self.row_count)

        col_names = transform_data[selected_family.get_name()][self.col_count]
        templates = _fetch_templates('data/paradigmtranstemplates.txt', list(feature_to_sounds.keys()))
        random.shuffle(templates)
        self.col_data = []

        if random.random() < 0.5 or len(templates) == len(col_names) - 1:
            self.col_data.append((col_names[0], _Transformer(None, feature_to_sounds, phonemes)))
            col_names = col_names[1:]

        if len(templates) < len(col_names):
            raise ValueError('Not enough templates for each transformation!')

        for i in range(len(col_names)):
            self.col_data.append((col_names[i], _Transformer(templates[i], feature_to_sounds, phonemes)))

        # print([(t[0], str(t[1])) for t in self.col_data])


class _Transformer:
    def __init__(self, template: Optional[Template], feature_to_sounds: Dict[str, List[Sound]],
                 phonemes: List[Word]):
        self._template = template

        if self._template:
            self._mod_word = random.choice(self._template.generate_word_list(phonemes, None, feature_to_sounds))
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


class Paradigm:
    def __init__(self, paradigm_attr: ParadigmAttr, words: List[Word], rule: Rule, phonemes: List[Word],
                 feature_to_type: Dict[str, str], feature_to_sounds: Dict[str, List[Sound]]):
        self._attr = paradigm_attr
        self._UR_words = [Word(str(word)) for word in words]
        self._UR_trans_pattern = []
        self._trans_names = []
        self._core_data = []
        self._transformers = []

        for col_data in self._attr.col_data:
            self._trans_names.append(col_data[0])
            self._transformers.append(col_data[1])
            self._UR_trans_pattern.append(str(col_data[1]))

        for row_i in range(len(words)):
            word = words[row_i]
            row_list = []

            for col_i in range(len(self._transformers)):
                transformer = self._transformers[col_i]
                row_list.append(
                    rule.apply(transformer.transform(word), phonemes, feature_to_type, feature_to_sounds)[0])

            self._core_data.append(row_list)

    def valid_row_indexes(self) -> set:
        valid_col_track = {}

        for r_index in range(len(self._core_data)):
            row = self._core_data[r_index]
            tc_indexes = []

            for c_index in range(len(row)):
                if row[c_index] != self._transformers[c_index].transform(row[c_index]):
                    tc_indexes.append(c_index)

                    if c_index not in valid_col_track:
                        valid_col_track[c_index] = [r_index]
                    else:
                        valid_col_track[c_index].append(r_index)

        valid_rows = set([])
        for t_col in valid_col_track.keys():
            if len(valid_col_track[t_col]) < len(self._core_data):
                for valid_row in valid_col_track[t_col]:
                    valid_rows.add(valid_row)

        return valid_rows

    def __str__(self) -> str:
        matrix_str = ""
        max_strlen = max(
            [len(self._core_data[r][c]) for r in range(len(self._core_data)) for c in range(len(self._core_data[0]))] +
            [len(tn) for tn in self._trans_names])

        matrix_str += "%s  %s\n" % (
            _pad_str("base", max_strlen), "  ".join([_pad_str(str(w), max_strlen) for w in self._trans_names]))
        matrix_str += "%s  %s\n" % (
            _pad_str("---", max_strlen), "  ".join([_pad_str(str(w), max_strlen) for w in self._UR_trans_pattern]))

        for r in range(len(self._core_data)):
            matrix_str += "%s  %s\n" % (_pad_str(str(self._UR_words[r]), max_strlen),
                                        "  ".join([_pad_str(str(w), max_strlen) for w in self._core_data[r]]))

        return matrix_str


class ParadigmGenerator:
    def __init__(self, paradigm_attr: ParadigmAttr, rule: Rule, phonemes: List[Word], templates: List[Template],
                 feature_to_type: Dict[str, str], feature_to_sounds: Dict[str, List[Sound]]):
        self._phonemes = phonemes
        self._feature_to_type = feature_to_type
        self._feature_to_sounds = feature_to_sounds
        self._rule = rule
        self._generator = Generator(phonemes, templates, rule, 5, feature_to_type, feature_to_sounds)
        self._attr = paradigm_attr

    def get_paradigm_question(self) -> Paradigm:
        gen_data = self._generator.generate(GenMode.rawData, self._attr.row_count, True, False, None)  # type: dict
        word_list = []
        for lst in gen_data.values():
            word_list.extend(lst)

        paradigm = Paradigm(self._attr, word_list, self._rule, self._phonemes, self._feature_to_type,
                            self._feature_to_sounds)
        return paradigm


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


def _pad_str(org_str: str, padding_size: int) -> str:
    while len(org_str) < padding_size:
        org_str += " "

    return org_str
