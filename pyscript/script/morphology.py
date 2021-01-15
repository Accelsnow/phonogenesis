from typing import List, Dict, Optional

from script import Rule, import_default_gloss, Template, Word, Sound, Generator, GenMode
import random

from script.templates import _fetch_templates


class ParadigmAttr:
    def __init__(self, feature_to_sounds: Dict[str, List[Sound]], phonemes: List[Word]):
        self.col_count = random.randint(2, 4)
        min_row = (20 // self.col_count) + 1
        max_row = 30 // self.col_count
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


# Transformer is currently an appending transformer
class _Transformer:
    def __init__(self, template: Optional[Template], feature_to_sounds: Dict[str, List[Sound]],
                 phonemes: List[Word]):
        self._template = template

        # TODO: MODIFY HERE
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
    def __init__(self, col_data, words: List[Word], rule: Rule, phonemes: List[Word],
                 feature_to_type: Dict[str, str], feature_to_sounds: Dict[str, List[Sound]]):
        self._col_data = col_data
        self._UR_words = [Word(str(word)) for word in words]
        self._UR_trans_pattern = []
        self._trans_names = []
        self._applied_core_data = []
        self._org_rule_trans_ct = []
        self._transformers = []

        for col_data in self._col_data:
            self._trans_names.append(col_data[0])
            self._transformers.append(col_data[1])
            self._UR_trans_pattern.append(str(col_data[1]))

        for row_i in range(len(words)):
            word = words[row_i]
            applied_row_list = []
            trans_ct_list = []

            for col_i in range(len(self._transformers)):
                transformer = self._transformers[col_i]
                apply_data = rule.apply(transformer.transform(word), phonemes, feature_to_type, feature_to_sounds)
                trans_ct_list.append(apply_data[1])
                applied_row_list.append(apply_data[0])

            self._applied_core_data.append(applied_row_list)
            self._org_rule_trans_ct.append(trans_ct_list)

    def get_ur_words(self) -> List[Word]:
        return self._UR_words

    def valid_row_indexes(self) -> List[int]:
        valid_rows = []
        has_bad_row = False

        for r_index in range(len(self._org_rule_trans_ct)):
            row = self._org_rule_trans_ct[r_index]
            diff = max(row) - min(row)

            if diff == 0:
                has_bad_row = True
            else:
                valid_rows.append(r_index)

        if not has_bad_row:
            return []
        else:
            return valid_rows

    def __str__(self) -> str:
        matrix_str = ""
        max_strlen = max(
            [len(self._applied_core_data[r][c]) for r in range(len(self._applied_core_data)) for c in
             range(len(self._applied_core_data[0]))] +
            [len(tn) for tn in self._trans_names])

        matrix_str += "%s  %s\n" % (
            _pad_str("base", max_strlen), "  ".join([_pad_str(str(w), max_strlen) for w in self._trans_names]))
        matrix_str += "%s  %s\n" % (
            _pad_str("---", max_strlen), "  ".join([_pad_str(str(w), max_strlen) for w in self._UR_trans_pattern]))

        for r in range(len(self._applied_core_data)):
            matrix_str += "%s  %s\n" % (_pad_str(str(self._UR_words[r]), max_strlen),
                                        "  ".join([_pad_str(str(w), max_strlen) for w in self._applied_core_data[r]]))

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

    def _generate_base_words(self, gen_size: int) -> List[Word]:
        num_templates = len(self._templates)
        word_list = []

        for i in range(num_templates):
            if i == num_templates - 1:
                gen_count = gen_size - len(word_list)
            else:
                gen_count = gen_size // num_templates

            word_list.extend(self._templates[i].generate_word_list(self._phonemes, gen_count, self._feature_to_sounds))

        random.shuffle(word_list)
        return word_list

    def get_paradigm_question(self) -> Paradigm:
        num_rows = self._attr.row_count
        gen_size = num_rows * 10

        word_list = self._generate_base_words(gen_size)

        paradigm = Paradigm(self._attr.col_data, word_list, self._rule, self._phonemes, self._feature_to_type,
                            self._feature_to_sounds)

        valid_rows = paradigm.valid_row_indexes()

        if len(valid_rows) < num_rows:
            print("FAILED INSUFFICIENT")
            return paradigm
        elif len(valid_rows) == gen_size:
            print("FAILED NO INVALID")
            return paradigm
        else:
            dest_word_list = []
            valid_need = num_rows // 2
            invalid_need = num_rows // 2

            for r_index in valid_rows[:valid_need]:
                dest_word_list.append(word_list[r_index])

            valid_rows = valid_rows[valid_need:]

            for i in range(len(word_list)):
                if i not in valid_rows:
                    dest_word_list.append(word_list[i])
                    invalid_need -= 1

                if invalid_need == 0:
                    break

            while invalid_need > 0:
                dest_word_list.append(word_list[invalid_need])
                invalid_need -= 1

            return Paradigm(self._attr.col_data, dest_word_list, self._rule, self._phonemes,
                            self._feature_to_type, self._feature_to_sounds)


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
