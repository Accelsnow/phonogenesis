from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import GenerationSpec
from app import DEFAULT_DATA, TOTAL_RULE_COUNT
from script import *
import random
import logging

RETRY_LIMIT = 50
gen: Generator
LOGGER = logging.getLogger("app.logger")


@app.route('/index', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():
    gen_spec_form = GenerationSpec()
    print(gen_spec_form.type_selection.data, gen_spec_form.validate_on_submit())
    if gen_spec_form.validate_on_submit():

        type_selection = gen_spec_form.type_selection.data
        rule_selection_data = gen_spec_form.rule_selection.data
        is_selected = rule_selection_data is not None

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

            if ((type_selection == 1 and Classification.Alternating != rule_type) or
                    (type_selection == 2 and Classification.Neutralizing != rule_type)):
                classification_match_retry += 1

                if not is_selected:
                    rule_selection = DEFAULT_DATA['rules'][random.randint(0, TOTAL_RULE_COUNT - 1)]

                continue

            break

        size = gen_spec_form.question_size.data

        data = _get_valid_data(rule_selection, phonemes, size, gen_spec_form.randomize_order.data)

        if data is None:
            return redirect(url_for('index'))
        else:
            return render_template('index.html', title='Result', form=gen_spec_form, data=data, size=size)

    return render_template('index.html', title='Demo', form=gen_spec_form)


def _get_valid_data(rule_selected: Rule, phonemes: list, size: int, is_shuffled: bool):
    global gen
    data = None

    try:
        gen = Generator(phonemes, DEFAULT_DATA['templates'], rule_selected, 5,
                        DEFAULT_DATA['f2t'], DEFAULT_DATA['f2ss'])
        data = gen.generate(size, True, is_shuffled, DEFAULT_DATA['f2t'],
                            DEFAULT_DATA['f2ss'],
                            DEFAULT_DATA['gloss_grp'])
        data['generator'] = gen
    except GenerationNoCADTError or GeneratorParameterError or GeneratorError:
        LOGGER.exception('')
    except Exception as err:
        LOGGER.exception("UNEXPECTED ERROR")
        raise err

    if data is not None:
        LOGGER.info("Data recorded: \nUR %s\nSR %s\n%s\n" % (
            [str(s) for s in data['UR']], [str(s) for s in data['SR']], gen.get_log_stamp()))
    else:
        LOGGER.debug("No data recorded (None).")

    return data
