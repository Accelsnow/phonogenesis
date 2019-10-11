from flask_wtf import FlaskForm
from wtforms import SubmitField, BooleanField, IntegerField, SelectField
from wtforms.validators import DataRequired, ValidationError, NumberRange, Optional
from app import TOTAL_RULE_COUNT
from script import RuleType

TYPE_SELECTION_DICT = {1: None, 2: RuleType.Alternating, 3: RuleType.Neutralizing, 4: RuleType.Mixed}
HINT_SELECTION_DICT = {1: "poi", 2: "fp"}
MORE_GEN_SELECTION_DICT = {1: "CADT", 2: "CAND", 3: "NCAD"}


def validate_rule_selection(form, field):
    if field.data and (not str(field.data).isnumeric()) or int(field.data) < 0 or int(field.data) >= TOTAL_RULE_COUNT:
        raise ValidationError('Not a valid rule NO. (valid range 0 - %d)' % (TOTAL_RULE_COUNT - 1))


class GenerationSpec(FlaskForm):
    rule_selection = IntegerField('Rule NO. (leave blank for random question!)',
                                  validators=[Optional(), validate_rule_selection])
    question_size = IntegerField('Question Size (15-40)', validators=[DataRequired(), NumberRange(15, 40)])
    type_selection = SelectField("Question Type",
                                 choices=[(1, "Random"), (2, "Alternating"), (3, "Neutralizing"), (4, "Mixed")],
                                 coerce=int, default=1)
    randomize_order = BooleanField("Shuffle Result?")
    submit = SubmitField('Get Question!')


class GetHint(FlaskForm):
    hints = SelectField("More Hints: ", coerce=int, choices=[(1, "Phones of Interest"), (2, "Full Phonemes")],
                        default=1)
    submit_hint = SubmitField("Get Hint!")


class GenerateMore(FlaskForm):
    requested_type = SelectField("Type to Generate ", coerce=int, choices=[(1, "CADT"), (2, "CAND"), (3, "NCAD")],
                                 default=1)
    submit_request = SubmitField("Get More!")


class ShowAnswer(FlaskForm):
    show_answer = SubmitField("Show Answer!")
