from __future__ import annotations

import random
from typing import List

from script import Sound, Word
from random import random, sample


def import_default_phonemes() -> List[Word]:
    import os
    return _fetch_randomized_phonemes(
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "data/defaultpresetphoneme.txt"))


def _fetch_randomized_phonemes(filename: str) -> List[Word]:
    phoneme_list = []
    phoneme_str = []

    with open(filename, encoding='utf-8') as data_file:
        lines = [l.rstrip('\n') for l in data_file.readlines()]

        for line in lines:
            line = line.replace('ɡ', 'g')
            data = line.split(" ")
            phoneme_str.extend(data)
            phoneme_list.append(data)

    #   filter 1
    drop_list = []
    if random() < 0.5:
        drop_list.extend(["ʔ"])

    #   filter 2
    if random() < 0.5:
        drop_list.extend(["h"])

    #   filter 3
    if random() < 0.5:
        drop_list.extend(["t͡ʃ", "d͡ʒ"])

    #   filter 4
    r4 = random()
    if r4 < 0.25:
        drop_list.extend(["v", "ð", "z", "ʒ"])
    elif r4 < 0.5:
        drop_list.extend(["v", "ð", "z", "ʒ", "b", "d", "g", "d͡ʒ"])

    #   filter 5
    if random() < 0.15:
        drop_list.extend(["f", "v"])

    #   filter 6
    if random() < 0.15:
        drop_list.extend(["θ", "ð"])

    #   filter 7
    if random() < 0.15:
        drop_list.extend(["ʃ", "ʒ"])

    #   filter 8
    if random() < 0.15:
        drop_list.extend(["m"])

    #   filter 9
    if random() < 0.25:
        drop_list.extend(["ŋ"])

    #   filter 10
    r10 = random()
    if r10 < 0.25:
        drop_list.extend(sample(["r", "l", "w", "j"], 1))
    elif r10 < 0.5:
        drop_list.extend(sample(["r", "l", "w", "j"], 2))
    elif r10 < 0.75:
        drop_list.extend(sample(["r", "l", "w", "j"], 3))

    #   filter 11
    if random() < 0.75:
        drop_list.extend(["æ", "ɑ"])
    else:
        drop_list.extend(["a"])

    #   filter 12
    if random() < 0.5:
        drop_list.extend(["ə"])

    #   filter 13
    r13 = random()
    if r13 < 0.2:
        drop_list.extend(["ɪ", "ʊ", "e", "ɛ", "ɔ", "o"])
    elif r13 < 0.4:
        drop_list.extend(["ɪ", "ʊ"])
        drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 3))
    elif r13 < 0.5:
        drop_list.extend(["ɪ", "ʊ"])
        drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 2))
    elif r13 < 0.6:
        drop_list.extend(["ɪ", "ʊ", "u"])
        drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 2))
    elif r13 < 0.7:
        drop_list.extend(["ɪ", "ʊ"])
        drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 1))
    elif r13 < 0.75:
        drop_list.extend(["ɪ", "ʊ", "u"])
        drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 1))
    elif r13 < 0.8:
        drop_list.extend(sample(["e", "ɛ", "ɔ", "o"], 1))
    elif r13 < 0.9:
        drop_list.extend(["ɪ", "ʊ"])
    elif r13 < 0.95:
        drop_list.extend(["ɪ", "ʊ", "u"])

    phoneme_randomized = [s for s in phoneme_str if s not in drop_list]
    phonemes = [Word([Sound(-1, '', [])[str(s)]]) for s in phoneme_randomized]

    return phonemes


def _fetch_preset_phonemes(filename: str) -> List[Word]:
    phonemes = []

    with open(filename, encoding='utf-8') as data_file:
        lines = [l.rstrip('\n') for l in data_file.readlines()]

        for line in lines:
            line = line.replace('ɡ', 'g')
            data = line.split(" ")

            for sound_str in data:
                phonemes.append(Word([Sound(-1, '', [])[str(sound_str)]]))

    return phonemes
