from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import GenerationSpec, GetHint, GenerateMore
from app import DEFAULT_DATA, TOTAL_RULE_COUNT
from script import *
import random
import logging

RETRY_LIMIT = 50
gen: Generator
data: dict
size: int
LOGGER = logging.getLogger("app.logger")


@app.route('/index', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():
    global data, size
    gen_spec_form = GenerationSpec()
    hint_form = GetHint()
    generate_more_form = GenerateMore()

    if gen_spec_form.validate_on_submit():

        type_selection = gen_spec_form.type_selection.data
        LOGGER.debug("Type Selection: %s", str(type_selection))
        rule_selection_data = gen_spec_form.rule_selection.data
        is_selected = rule_selection_data is not None
        LOGGER.debug("Manual Selection: %s", str(is_selected))

        if is_selected:
            rule_selection = DEFAULT_DATA['rules'][int(rule_selection_data)]  # type: Rule
        else:
            rule_selection = DEFAULT_DATA['rules'][random.randint(0, TOTAL_RULE_COUNT - 1)]  # type: Rule

        classification_match_retry = 0
        while True:
            if classification_match_retry > RETRY_LIMIT:
                LOGGER.error("Can not seem to get matched phoneme & rule to conform classification")
                return redirect(url_for('index'))

            phonemes = get_random_phonemes(rule_selection.get_a_matcher(None, None, DEFAULT_DATA['f2ss']))
            rule_type = rule_selection.get_classification(phonemes, DEFAULT_DATA['f2t'], DEFAULT_DATA['f2ss'])
            print(rule_type)

            if ((type_selection == 1 and RuleType.Alternating != rule_type) or
                    (type_selection == 2 and RuleType.Neutralizing != rule_type)):
                classification_match_retry += 1

                if not is_selected:
                    rule_selection = DEFAULT_DATA['rules'][random.randint(0, TOTAL_RULE_COUNT - 1)]

                continue

            break

        size = int(gen_spec_form.question_size.data)

        is_shuffled = bool(gen_spec_form.randomize_order.data)
        LOGGER.debug("Shuffle Result: %s", str(is_shuffled))
        data = _get_valid_data(rule_selection, phonemes, size, is_shuffled)

        if data is None:
            return redirect(url_for('index'))
        else:
            return render_template('index.html', title='Result', gen_form=gen_spec_form, hint_form=hint_form,
                                   gen_more_form=generate_more_form, data=data, size=size)

    if hint_form.validate_on_submit():
        return render_template('index.html', title='Result', gen_form=gen_spec_form, hint_form=hint_form,
                               gen_more_form=generate_more_form, data=data, size=size, show_interest=True)

    if generate_more_form.validate_on_submit():
        return render_template('index.html', title='Result', gen_form=gen_spec_form, hint_form=hint_form,
                               gen_more_form=generate_more_form, data=data, size=size, show_interest=True)

    return render_template('index.html', title='Demo', gen_form=gen_spec_form, hint_form=hint_form,
                           gen_more_form=generate_more_form)


def _get_valid_data(rule_selected: Rule, phonemes: list, size_: int, is_shuffled: bool):
    global gen
    data_ = None

    try:
        gen = Generator(phonemes, DEFAULT_DATA['templates'], rule_selected, 5,
                        DEFAULT_DATA['f2t'], DEFAULT_DATA['f2ss'])
        data_ = gen.generate(size_, True, is_shuffled, DEFAULT_DATA['f2t'],
                             DEFAULT_DATA['f2ss'],
                             DEFAULT_DATA['gloss_grp'])
        data_['generator'] = gen
    except GenerationNoCADTError or GeneratorParameterError or GeneratorError:
        LOGGER.exception('')
    except Exception as err:
        LOGGER.exception("UNEXPECTED ERROR")
        raise err

    if data_ is not None:
        LOGGER.info("Data recorded: \nUR %s\nSR %s\n%s\n" % (
            [str(s) for s in data_['UR']], [str(s) for s in data_['SR']], gen.get_log_stamp()))
    else:
        LOGGER.debug("No data recorded (None).")

    return data_
