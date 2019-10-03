from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import GenerationSpec
from app import DEFAULT_DATA, TOTAL_RULE_COUNT
from script import *
import random
import logging

RETRY_LIMIT = 5
gen: Generator
LOGGER = logging.getLogger("app.logger")


@app.route('/index', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():
    gen_spec_form = GenerationSpec()
    if gen_spec_form.validate_on_submit():

        if gen_spec_form.rule_selection.data is not None:
            rule_selection = int(gen_spec_form.rule_selection.data)
        else:
            rule_selection = random.randint(0, TOTAL_RULE_COUNT - 1)

        size = gen_spec_form.question_size.data
        data = _get_valid_data(rule_selection, size, gen_spec_form.randomize_order.data)

        if data is None:
            return redirect(url_for('index'))
        else:
            return render_template('index.html', title='Result', form=gen_spec_form, data=data, size=size)

    return render_template('index.html', title='Demo', form=gen_spec_form)


def _get_valid_data(rule_selection: int, size: int, is_shuffled: bool):
    global gen
    data = None
    retry_count = 0
    rule_selected = DEFAULT_DATA['rules'][rule_selection]  # type: Rule

    while True:
        phonemes = get_random_phonemes(rule_selected.get_a_matcher(None, None, DEFAULT_DATA['f2ss']))

        try:
            gen = Generator(phonemes, DEFAULT_DATA['templates'], rule_selected, 5,
                            DEFAULT_DATA['f2t'], DEFAULT_DATA['f2ss'])
            data = gen.generate(size, True, is_shuffled, DEFAULT_DATA['f2t'],
                                DEFAULT_DATA['f2ss'],
                                DEFAULT_DATA['gloss_grp'])
            data['generator'] = gen
            break
        except GenerationNoCADTError:
            if retry_count > RETRY_LIMIT:
                LOGGER.exception('')
                break

            retry_count += 1
            continue
        except GeneratorParameterError or GeneratorError:
            LOGGER.exception('')
            break
        except Exception as err:
            template_str = [str(t) for t in DEFAULT_DATA['templates']]
            rule_str = str(DEFAULT_DATA['rules'][rule_selection])
            LOGGER.exception(
                "Unexpected Error. ENV: \n %s \n %s \n %s" % (rule_str, [str(w) for w in phonemes], template_str))
            raise err

    if data is not None:
        LOGGER.info("Data recorded: \nUR %s\nSR %s\n%s\n" % (
            [str(s) for s in data['UR']], [str(s) for s in data['SR']], gen.get_log_stamp()))
    else:
        LOGGER.debug("No data recorded (None).")

    return data
