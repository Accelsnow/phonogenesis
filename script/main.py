from __future__ import annotations

import sys
from typing import List, Optional, Dict, Tuple

from script.feature_lib import Particle, import_default_features
from script.generator import Generator
import random
from script.word import Word
from script.rules import Rule, RuleFamily, import_default_rules
from script.sound import Sound
from script.glossgroup import import_default_gloss
from script.templates import Template, import_default_templates
from script.phonemes import import_default_randomized_phonemes


def _print_result(rst: dict):
    if rst is None:
        print("No result.")
        return
    print("\n=============RESULTS================")
    print("UR w/only: ", ["%s" % s[0] for s in rst[0]])
    print("SR w/only: ", ["%s" % s[0] for s in rst[1]])
    print("UR: ", ["%s '%s'" % (s[0], s[1]) for s in rst[0]])
    print("SR: ", ["%s '%s'" % (s[0], s[1]) for s in rst[1]])
    print("RULE: ", rst[2])
    print("TEMPLATES: ")
    for t in [str(s) for s in rst[3]]:
        print(t)


def random_select(families: List[RuleFamily], rules_: List[Rule], family_num: int, rule_num: int) -> List[Rule]:
    if family_num > rule_num:
        raise AttributeError("family num larger than rule num")

    if len(families) < family_num:
        raise AttributeError("num greater than family size")

    if len(rules_) < rule_num:
        raise AttributeError("num greater than rule size")

    chosen_family = random.choices(families, k=family_num)  # type: List[RuleFamily]
    rules_pool = [family_.get_rules() for family_ in chosen_family]
    random_result = []

    while rule_num > 0:
        for pool in rules_pool:
            if rule_num <= 0:
                break

            if len(pool) == 0:
                continue

            chosen = random.choice(pool)  # type: Rule
            pool.remove(chosen)
            random_result.append(chosen)
            rule_num -= 1

    return random_result


if __name__ == '__main__':
    tup = import_default_features()

    features = tup[0]  # type: List[str]
    sounds = tup[1]  # type: List[Sound]
    type_to_features = tup[2]  # type: Dict[str, List[str]]
    feature_to_type = tup[3]  # type: Dict[str, str]
    feature_to_sounds = tup[4]  # type: Dict[str, List[Sound]]
    features_to_sound = tup[5]  # type: Dict[Particle, Sound]

    templates = import_default_templates(features)  # type: List[Template]

    print("full templates: ")
    ti = 1
    for template in templates:
        print(ti, template)
        ti += 1

    rule_data = import_default_rules(features)  # type: Tuple[List[RuleFamily], List[Rule]]
    rule_families = rule_data[0]  # type: List[RuleFamily]
    rules = rule_data[1]  # type: List[Rule]

    print("\nfull rule families:")
    fi = 1
    for family in rule_families:
        print(fi, family)
        fi += 1

    print("\nfull rules: ")
    ri = 1
    for rule in rules:
        print(ri, rule)
        ri += 1

    gloss_data = import_default_gloss()
    gloss_families = gloss_data[0]
    gloss_groups = gloss_data[1]

    print("\nfull gloss families: ", [str(f) + "\n" for f in gloss_families])
    print("\nfull gloss groups: ", [str(g) + "\n" for g in gloss_groups])

    print("\n==================================================\n")

    manual_rule_select = 84

    use_rule = rules[manual_rule_select]
    amount = 20

    phonemes = import_default_randomized_phonemes([use_rule.get_a_matcher(None, None, feature_to_sounds),
                                                   use_rule.get_c_matchers(None, feature_to_sounds),
                                                   use_rule.get_d_matchers(None, feature_to_sounds)])
    print("\nfull phonemes: ", [str(p) for p in phonemes])

    while True:
        # word = input("\nWord to check: ")
        word = "nadapa"
        print(rules[manual_rule_select])
        print(rules[manual_rule_select].classify(Word(word), phonemes, feature_to_type, feature_to_sounds))
        print(str(rules[manual_rule_select].apply(Word(word), phonemes, feature_to_type, feature_to_sounds)))
        break

    # use_templates = templates
    #
    # print("USING TEMPLATES: ")
    # ti = 1
    # for template in use_templates:
    #     print(ti, template)
    #     ti += 1
    #
    # print("\nUSING RULE: ", use_rule)
    # print("\nGENERATION AMOUNT:", amount, '\n')
    #
    # print("=============INTEREST===============")
    # interest = rules[manual_rule_select].get_interest_phones(phonemes, feature_to_type, feature_to_sounds)
    # print(interest[0])
    # print(interest[1])
    #
    # gen = Generator(phonemes, use_templates, use_rule, 5, feature_to_type, feature_to_sounds)
    #
    # result = gen.generate(amount, True, False, feature_to_type, feature_to_sounds, gloss_groups)
    #
    # _print_result(result)

    # print("\n\n\nTRIAL 2\n\n\n")
    #
    # result2 = gen.generate([5, 0, 0, 0, 0], False, feature_to_type, feature_to_sounds, gloss_groups)
    #
    # _print_result(result2)
