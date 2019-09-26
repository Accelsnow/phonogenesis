from typing import Dict, Any, List
from script import Word


def get_random_phonemes() -> List[Word]:
    from script.phonemes import import_default_phonemes

    return import_default_phonemes()


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
