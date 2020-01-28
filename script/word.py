from __future__ import annotations
from typing import List, Optional
from script.sound import Sound, _SYMBOL
import logging

LOGGER = logging.getLogger("app.logger")


class Word:
    _sounds: List[Sound]

    def __init__(self, data: Optional[List[Sound], str]) -> None:
        if type(data) == str:
            sounds = []
            i = 0

            while i < len(data):
                end_loc = -1

                for j in range(i + 1, len(data) + 1):
                    if len(data[i:j]) > 0 and data[i:j] in _SYMBOL:
                        end_loc = j

                sounds.append(_SYMBOL[data[i:end_loc]])
                i = end_loc

            self._sounds = sounds

        elif type(data) == list and (len(data) == 0 or type(data[0]) == Sound):
            self._sounds = data
        else:
            raise TypeError("data must be either sound list or string, get %s" % str(type(data)))

    def get_sounds(self) -> List[Sound]:
        return self._sounds

    def change_word(self, begin_index: int, end_index: int, target: Optional[None, Word]) -> Word:
        """
        Build a new word with current word's given index replaced with target word.
        If target word is None, delete the sound at that index instead.
        """
        clone_sounds = [s for s in self._sounds]

        if target is None:
            clone_sounds.pop(begin_index)
        else:
            clone_sounds = clone_sounds[:begin_index] + target.get_sounds() + clone_sounds[end_index:]

        return Word(clone_sounds)

    def index(self, target: Word, start_index: int) -> int:
        """
        Find the index of the first occurrence of target word starting from start_index in the current word.
        """
        con_len = len(target)

        for i in range(start_index, len(self)):
            if i + con_len <= len(self) and Word(self._sounds[i:i + con_len]) == target:
                return i

        return -1

    def is_empty(self):
        return len(self) == 0 or str(self) == ''

    def __str__(self) -> str:
        word_str = ""

        for sound in self._sounds:
            word_str += str(sound)

        return word_str

    def __len__(self):
        return len(self._sounds)

    def __hash__(self):
        return hash(str(self))

    def __getitem__(self, item) -> Word:
        if type(item) == int:
            return Word([self._sounds[item]])
        elif type(item) == slice:
            return Word(self._sounds[item])
        else:
            raise TypeError("can only use int as index to words")

    def __eq__(self, other: Word) -> bool:
        return str(self) == str(other)

    def __ne__(self, other: Word) -> bool:
        return str(self) != str(other)
