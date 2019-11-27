from flask_wtf import FlaskForm
from wtforms import SubmitField, BooleanField, IntegerField, SelectField, StringField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, NumberRange, Optional
from app import TOTAL_RULE_COUNT, DEFAULT_DATA
from script import RuleType

TYPE_SELECTION_DICT = {1: None, 2: RuleType.Alternating, 3: RuleType.Neutralizing, 4: RuleType.Mixed}
HINT_SELECTION_DICT = {1: "fp", 2: "ur"}
MORE_GEN_SELECTION_DICT = {1: "CADT", 2: "CAND", 3: "NCAD"}


def validate_rule_selection(form, field):
    if field.data and (not str(field.data).isnumeric()) or int(field.data) < 0 or int(field.data) >= TOTAL_RULE_COUNT:
        raise ValidationError('Not a valid rule NO. (valid range 0 - %d)' % (TOTAL_RULE_COUNT - 1))


def validate_sound_existance(form, field):
    if field is None or len(field.data) == 0 or str(field.data).isspace():
        return

    sounds = field.data.split(" ")
    existed_sounds = [str(s) for s in DEFAULT_DATA['sounds']]

    for sound in sounds:
        if sound not in existed_sounds:
            raise ValidationError("%s is NOT a valid sound in the DEFAULT DATA set." % sound)


class GenerationSpec(FlaskForm):
    rule_selection = IntegerField('Rule NO. (leave blank for random question!)',
                                  validators=[Optional(), validate_rule_selection])
    question_size = IntegerField('Question Size (15-40)', validators=[DataRequired(), NumberRange(15, 40)], default=20)
    type_selection = SelectField("Question Type",
                                 choices=[(1, "Random"), (2, "Alternating"), (3, "Neutralizing"), (4, "Mixed")],
                                 coerce=int, default=1)
    randomize_order = BooleanField("Shuffle Result?")
    submit = SubmitField('Get Question!')


class GetHint(FlaskForm):
    hints = SelectField("More Hints: ", coerce=int, choices=[(1, "Full Phonemes"), (2, "UR")],
                        default=1)
    submit_hint = SubmitField("Get Hint!")


class GenerateMore(FlaskForm):
    requested_type = SelectField("Type to Generate ", coerce=int, choices=[(1, "CADT"), (2, "CAND"), (3, "NCAD")],
                                 default=1)
    submit_request = SubmitField("Get More!")


class ShowAnswer(FlaskForm):
    show_answer = SubmitField("Show Answer!")


class ProfGenForm(FlaskForm):
    rule_raw = StringField("Rule (blank for random): ")
    phoneme_sound = StringField("Phoneme Sound (blank for random): ", validators=[validate_sound_existance])
    template = TextAreaField("Templates: ", default="\n".join([str(t) for t in DEFAULT_DATA['templates']]))
    question_size = IntegerField('Question Size (15-40)', validators=[DataRequired(), NumberRange(15, 40)], default=20)
    randomize_order = BooleanField("Shuffle Result?")
    submit = SubmitField('Generate Question')
