from __future__ import annotations

import csv
import sys
from typing import List, Dict, Tuple

from script import Particle, import_default_features, Generator, Rule, RuleFamily, import_default_rules, Sound, \
    Template, import_default_templates, import_default_phonemes

if __name__ == '__main__':
    tup = import_default_features()

    features = tup[0]  # type: List[str]
    sounds = tup[1]  # type: List[Sound]
    type_to_features = tup[2]  # type: Dict[str, List[str]]
    feature_to_type = tup[3]  # type: Dict[str, str]
    feature_to_sounds = tup[4]  # type: Dict[str, List[Sound]]
    features_to_sound = tup[5]  # type: Dict[Particle, Sound]

    templates = import_default_templates(features)  # type: List[Template]

    rule_data = import_default_rules(features)  # type: Tuple[List[RuleFamily], List[Rule]]
    rule_families = rule_data[0]  # type: List[RuleFamily]
    rules = rule_data[1]  # type: List[Rule]

    phonemes = import_default_phonemes()

    row_data = []

    for rule in rules:
        print("\n\n", str(rule), ":")
        success = True
        data = [str(rule)]  # type:list

        try:
            gen = Generator(phonemes, templates, rule, 5, feature_to_type, feature_to_sounds)

            result = gen.generate(20, feature_to_type, feature_to_sounds)
            amounts = [str(i) for i in result[4]]
        except:
            success = False
            info = sys.exc_info()[0]
            data.extend([info for _ in range(0, 5)])
            data.append("ERROR")

        if success:
            data.extend(amounts)

            if amounts[0] == 0 or False not in [amounts[i] == 0 for i in range(1, len(amounts))]:
                data.append("ABNORMAL")
            else:
                data.append("-")

        row_data.append(data)
        print(success, '\n\n')

    with open('analyze.csv', 'w', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerows(row_data)
