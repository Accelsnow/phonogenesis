from flask_wtf import FlaskForm
from wtforms import SubmitField, BooleanField, IntegerField, SelectField
from wtforms.validators import DataRequired, ValidationError, NumberRange, Optional
from app import TOTAL_RULE_COUNT


def validate_rule_selection(form, field):
    if field.data and (not str(field.data).isnumeric() or int(field.data) < 0 or int(field.data) >= TOTAL_RULE_COUNT):
        raise ValidationError('Not a valid rule NO. (valid range 0 - %d)' % (TOTAL_RULE_COUNT - 1))


class GenerationSpec(FlaskForm):
    rule_selection = IntegerField('Rule NO. (leave blank for random question!)',
                                  validators=[Optional(), validate_rule_selection])
    question_size = IntegerField('Question Size (15-40)', validators=[DataRequired(), NumberRange(15, 40)])
    submit = SubmitField('Get Question!')
    randomize_order = BooleanField("Shuffle Result?")
    type_selection = SelectField("Question Type", choices=[(1, "Alternating"),
                                                           (2, "Neutralizing")],
                                 coerce=int)
