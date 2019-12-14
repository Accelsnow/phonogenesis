from __future__ import annotations

import random
from typing import List, Dict, Optional

from script import Word, Particle, Sound


class Template:
    _size: int
    _components: List[Particle]

    def __init__(self, components: List[Particle]) -> None:
        self._components = components
        self._size = len(components)

    def generate_word_list(self, phonemes: Optional[List[Word], None], size_limit: Optional[int, None],
                           feature_to_sounds: Dict[str, List[Sound]], target_phones: Optional[List[Word], None]) -> \
            List[Word]:
        """
        Generate a word list with current template using given environments.

        If target_phones is None, then words are constructed using given full phoneme, otherwise only words with
        sound(s) from target_phones will be selected. When generating words with phones of interest, each sound in the
        interested phones will be given equivalent chance to be selected (i.e. attempt to achieve even distribution
        among interested phones)

        If size_limit is None, then all words matching current template will be recorded & returned, otherwise up to
        size_limit words will be returned.

        If size_limit is None, then target_phone MUST be None too (i.e. to generate with phones of interest, a size
        limit must be defined).
        """
        if size_limit is None:
            if target_phones is not None:
                raise AttributeError("Not allowed to have target phoneme when not having a size limit")

        word_len = len(self._components)

        part_sounds = []
        interest_sounds = []
        interest_indexes = []
        word_list = set([])

        if word_len == 0:
            return []

        for particle in self._components:
            part_sound = particle.get_matching_sounds(phonemes, feature_to_sounds)
            part_sounds.append(part_sound)

            if target_phones is not None:
                interest_sound = [s for s in part_sound if Word([s]) in target_phones]
                interest_sounds.append(interest_sound)

                if interest_sound != [] and len(interest_sound) > 0:
                    interest_indexes.append(len(interest_sounds) - 1)

        interest_total = len(interest_indexes)

        if size_limit is None:
            result = self._recur_full_word_list(part_sounds, 0, [''])

            return [Word(r) for r in result]
        else:
            word_count = 0
            if target_phones is None:
                while word_count < size_limit:
                    curr_word = []  # type: List[Sound]

                    for i in range(word_len):
                        if part_sounds[i] == [] or len(part_sounds[i]) == 0:
                            return []
                        curr_word.append(random.choice(part_sounds[i]))

                    word_list.add(Word(curr_word))
                    word_count += 1
            else:
                if interest_total == 0:
                    return []

                while word_count < size_limit:
                    interest_past = 0
                    interest_added = 0
                    possibility = 1.0 / interest_total

                    curr_word = [Sound('', []) for _ in range(0, word_len)]  # type: List[Sound]
                    unordered_index = [i for i in range(0, word_len)]
                    random.shuffle(unordered_index)

                    for i in unordered_index:
                        if interest_added < 3 and i in interest_indexes:
                            if random.random() < possibility or interest_added + interest_total - interest_past <= 1:
                                curr_word[i] = random.choice(interest_sounds[i])
                                interest_added += 1
                            else:
                                curr_word[i] = random.choice(part_sounds[i])

                            interest_past += 1
                        else:
                            curr_word[i] = random.choice(part_sounds[i])

                    word_list.add(Word(curr_word))
                    word_count += 1

            result = list(word_list)
            return result

    def _recur_full_word_list(self, comb_sound: List[List[Sound]], index: int, words: List[str]) -> List[str]:
        if index >= len(comb_sound):
            return words
        else:
            new_words = []  # type: List[str]

            for sound in comb_sound[index]:
                for word in words:
                    new_words.append(word + str(sound))

            return self._recur_full_word_list(comb_sound, index + 1, new_words)

    def get_components(self) -> List[Particle]:
        """
        Returns the particles current template contains
        """
        return [block for block in self._components]

    def __str__(self) -> str:
        return "-".join([str(p) for p in self._components])


def import_default_templates(feature_pool: List[str]) -> List[Template]:
    import os
    return _fetch_templates(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data/defaulttemplate.txt"),
                            feature_pool)


def parse_template_line(line: str, feature_pool: List[str]) -> Template:
    """
    Line should be in format of [Particle Data]-[Particle Data]-...
    e.g. [consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]

    All letter 'g' is converted to conventional g (ipa g will be replaced)
    """
    line = line.replace('ɡ', 'g')
    particle_list = line.split("-")
    particles = []

    for particle_data in particle_list:
        particle_data = particle_data.rstrip('\r').rstrip('\n').rstrip(']').lstrip('[')
        feature_list = particle_data.split(",")
        for feature in feature_list:
            if feature not in feature_pool:
                raise ImportError("Template line %s does not conform to the given features." % line)

        particles.append(Particle(feature_list))

    return Template(particles)


def _fetch_templates(filename: str, feature_pool: List[str]) -> List[Template]:
    """
    Fetch templates from the given file, assuming each line of the file conforms to template line format.
    Default encoding utf-8

    Feature pool needed for validity check during parsing
    """
    templates = []  # type: List[Template]

    with open(filename, encoding='utf-8') as data_file:
        lines = [line.rstrip('\n') for line in data_file.readlines()]

        for line in lines:
            templates.append(parse_template_line(line, feature_pool))

    return templates
