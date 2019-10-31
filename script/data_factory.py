from __future__ import annotations

from typing import Dict, Any, List, Optional
from script import Word, Sound, Particle, Template


def get_random_phonemes(interested_words: List[List[Word]]) -> List[Word]:
    from script.phonemes import import_default_randomized_phonemes

    return import_default_randomized_phonemes(interested_words)


def get_full_phonemes() -> List[Word]:
    from script.phonemes import import_default_full_phonemes

    return import_default_full_phonemes()


def get_customized_data(org_data: Optional[Dict[str, Any], None], new_sound_symbols: Optional[List[str], None],
                        new_sound_features: Optional[List[Dict[str, str]], None],
                        new_templates: Optional[List[str], None]) -> Dict[str, Any]:
    """
        features  # type: List[str]\n
        sounds  # type: List[Sound]\n
        t2fs  # type: Dict[str, List[str]]\n
        f2t  # type: Dict[str, str]\n
        f2ss  # type: Dict[str, List[Sound]]\n
        fs2s  # type: Dict[Particle, Sound]\n
        templates  # type: List[Template]\n
        rule_fam  # type: List[RuleFamily]\n
        rules  # type: List[Rule]\n
        phonemes  # type: List[Word]\n
        gloss_fam # type: List[GlossFamily]\n
        gloss_grp  # type: List[GlossGroup]\n

        :return: dict containing data read from default files
        """
    if org_data is not None:
        data = org_data
    else:
        data = get_default_data()

    if new_sound_symbols is not None and new_sound_features is not None:
        for i in range(len(new_sound_symbols)):
            symbol = new_sound_symbols[i]
            features_ = new_sound_features[i]

            for type_ in features_.keys():
                if type_ not in data['t2fs'].keys():
                    raise ValueError("New sound's type must be declared in data set already. Curr: %s" % type_)

            features = list(set(features_.values()))
            particle = Particle(features)
            sound = Sound(symbol, features)

            data['sounds'].append(sound)

            for type_ in features_.keys():
                feature = features_[type_]

                if feature not in data['features']:
                    data['features'].append(feature)
                    data['t2fs'][type_].append(feature)
                    data['f2t'][feature] = type_
                    data['f2ss'][feature].append(sound)
                    data['fs2s'][particle] = sound

    if new_templates is not None:
        from script import parse_template_line
        templates = []  # type: List[Template]

        for line in new_templates:
            templates.append(parse_template_line(line, data['features']))

        data['templates'] = templates

    return data


def get_default_data() -> Dict[str, Any]:
    """
    features  # type: List[str]\n
    sounds  # type: List[Sound]\n
    t2fs  # type: Dict[str, List[str]]\n
    f2t  # type: Dict[str, str]\n
    f2ss  # type: Dict[str, List[Sound]]\n
    fs2s  # type: Dict[Particle, Sound]\n
    templates  # type: List[Template]\n
    rule_fam  # type: List[RuleFamily]\n
    rules  # type: List[Rule]\n
    phonemes  # type: List[Word]\n
    gloss_fam # type: List[GlossFamily]\n
    gloss_grp  # type: List[GlossGroup]\n

    :return: dict containing data read from default files
    """
    from script.feature_lib import import_default_features
    from script.rules import import_default_rules
    from script.glossgroup import import_default_gloss
    from script.templates import import_default_templates
    _feature_data = import_default_features()

    features = _feature_data[0]
    sounds = _feature_data[1]
    type_to_features = _feature_data[2]
    feature_to_type = _feature_data[3]
    feature_to_sounds = _feature_data[4]
    features_to_sound = _feature_data[5]

    templates = import_default_templates(features)

    _rule_data = import_default_rules(features)
    rule_families = _rule_data[0]
    rules = _rule_data[1]

    gloss_data = import_default_gloss()
    gloss_families = gloss_data[0]
    gloss_groups = gloss_data[1]

    return {"features": features, "sounds": sounds, "t2fs": type_to_features, "f2t": feature_to_type,
            "f2ss": feature_to_sounds, "fs2s": features_to_sound, "templates": templates, "rule_fam": rule_families,
            "rules": rules, "gloss_fam": gloss_families, "gloss_grp": gloss_groups}
