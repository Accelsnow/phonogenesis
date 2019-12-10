from __future__ import annotations

import random
from typing import List, Any, Tuple, Set

from script import Sound, Word

UNNECESSARY_PRESERVE_PROB = 0.5


def import_default_full_phonemes() -> List[Word]:
    import os

    return _fetch_preset_phonemes(
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "data/defaultpresetphoneme.txt"))


def import_default_randomized_phonemes(interest_words: List[List[Word]]) -> List[Word]:
    import os

    interest_words_str = []  # type: List[List[str]]

    for iw in interest_words:
        interest_words_str.append([str(w) for w in iw])

    return _fetch_randomized_phonemes(
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "data/defaultphonemerandomization.txt"),
        interest_words_str)


def _fetch_randomized_phonemes(filename: str, interests: List[List[str]]) -> List[Word]:
    import ast

    drop_rules = []  # type: List[List[List[Any]]]

    with open(filename, encoding='utf-8') as data_file:
        lines = [l.rstrip('\n').lstrip() for l in data_file.readlines()]
        rule_block = []

        for line in lines:
            line = line.replace('g', 'ɡ')

            if line.startswith("#"):
                rule_block = []
                drop_rules.append(rule_block)
            else:
                data = line.split(" ")
                sec = []

                for i in range(0, len(data)):
                    sec.append(ast.literal_eval(data[i]))

                rule_block.append(sec)

    random.shuffle(drop_rules)

    phoneme_str = [str(w) for w in import_default_full_phonemes()]
    drop_list = []
    preserved_set = set([])
    preserv_probs = [1.0 for _ in range(len(interests))]  # type: List[float]

    for full_rule in drop_rules:
        rand_var = random.random()

        for rule in full_rule:
            if len(rule) % 2 == 0 or len(rule) < 3:
                raise ValueError("Error in file %s, all rule lines must have odd number args >= 3" % filename)

            rule_completed = False
            preserv_enforced = False
            prb_met = rand_var < rule[0]
            drop_buffer = []

            sec = 1
            while sec + 1 < len(rule):
                pool = rule[sec]
                sample_size = rule[sec + 1]

                pick_result = _get_random_pick(pool, interests, sample_size, preserv_probs, preserved_set)

                if True in pick_result[0]:
                    for i in range(len(pick_result[1])):
                        if pick_result[0][i]:
                            preserv_probs[i] = UNNECESSARY_PRESERVE_PROB
                            preserved_set.union(pick_result[1][i])

                    rule_completed = True
                    preserv_enforced = True
                else:
                    if prb_met:
                        for i in range(len(pick_result[0])):
                            if not pick_result[0][i]:
                                drop_buffer.extend(pick_result[1][i])
                                break

                        rule_completed = True

                sec += 2

            if rule_completed:

                if not preserv_enforced:
                    drop_list.extend(drop_buffer)

                break

    # #   filter 1
    # drop_list = []
    # if random() < 0.5:
    #     drop_list.extend(["ʔ"])
    #
    # #   filter 2
    # if random() < 0.5:
    #     drop_list.extend(["h"])
    #
    # #   filter 3
    # if random() < 0.5:
    #     drop_list.extend(["t͡ʃ", "d͡ʒ"])
    #
    # #   filter 4
    # r4 = random()
    # if r4 < 0.25:
    #     drop_list.extend(["v", "ð", "z", "ʒ"])
    # elif r4 < 0.5:
    #     drop_list.extend(["v", "ð", "z", "ʒ", "b", "d", "g", "d͡ʒ"])
    #
    # #   filter 5
    # if random() < 0.15:
    #     drop_list.extend(["f", "v"])
    #
    # #   filter 6
    # if random() < 0.15:
    #     drop_list.extend(["θ", "ð"])
    #
    # #   filter 7
    # if random() < 0.15:
    #     drop_list.extend(["ʃ", "ʒ"])
    #
    # #   filter 8
    # if random() < 0.15:
    #     drop_list.extend(["m"])
    #
    # #   filter 9
    # if random() < 0.25:
    #     drop_list.extend(["ŋ"])
    #
    # #   filter 10
    # r10 = random()
    # if r10 < 0.25:
    #     drop_list.extend(sample(["r", "l", "w", "j"], 1))
    # elif r10 < 0.5:
    #     drop_list.extend(sample(["r", "l", "w", "j"], 2))
    # elif r10 < 0.75:
    #     drop_list.extend(sample(["r", "l", "w", "j"], 3))
    #
    # #   filter 11
    # if random() < 0.75:
    #     drop_list.extend(["æ", "ɑ"])
    # else:
    #     drop_list.extend(["a"])
    #
    # #   filter 12
    # if random() < 0.5:
    #     drop_list.extend(["ə"])
    #
    # #   filter 13
    # r13 = random()
    # if r13 < 0.2:
    #     drop_list.extend(["ɪ", "ʊ", "e", "ɛ", "ɔ", "o"])
    # elif r13 < 0.4:
    #     drop_list.extend(["ɪ", "ʊ"])
    #     drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 3))
    # elif r13 < 0.5:
    #     drop_list.extend(["ɪ", "ʊ"])
    #     drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 2))
    # elif r13 < 0.6:
    #     drop_list.extend(["ɪ", "ʊ", "u"])
    #     drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 2))
    # elif r13 < 0.7:
    #     drop_list.extend(["ɪ", "ʊ"])
    #     drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 1))
    # elif r13 < 0.75:
    #     drop_list.extend(["ɪ", "ʊ", "u"])
    #     drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 1))
    # elif r13 < 0.8:
    #     drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 1))
    # elif r13 < 0.9:
    #     drop_list.extend(["ɪ", "ʊ"])
    # elif r13 < 0.95:
    #     drop_list.extend(["ɪ", "ʊ", "u"])

    phoneme_randomized = [s for s in phoneme_str if s not in drop_list]
    phonemes = [Word([Sound('', [])[str(s)]]) for s in phoneme_randomized]

    return phonemes


def _get_random_pick(pool: List[str], interests: List[List[str]], sample_size: int, preserv_probs: List[float],
                     preserved: Set[str]) -> Tuple[List[bool], List[List[str]]]:
    report = [], []  # type: Tuple[List[bool], List[List[str]]]

    for i in range(len(interests)):
        curr_interested = [p for p in pool if p in interests[i]]

        if True in [p in preserved for p in pool] or (len(curr_interested) > 0 and random.random() < preserv_probs[i]):
            report[0].append(True)
            report[1].append(curr_interested)
        else:
            report[0].append(False)
            report[1].append(random.sample(pool, sample_size))

    return report


def _fetch_preset_phonemes(filename: str) -> List[Word]:
    phonemes = []

    with open(filename, encoding='utf-8') as data_file:
        lines = [l.rstrip('\n') for l in data_file.readlines()]

        for line in lines:
            line = line.replace('ɡ', 'g')
            data = line.split(" ")

            for sound_str in data:
                phonemes.append(Word([Sound('', [])[str(sound_str)]]))

    return phonemes
