from flask import render_template, redirect, url_for
from app import app
from app.forms import GenerationSpec, GetHint, GenerateMore, ShowAnswer, ProfGenForm
from app import DEFAULT_DATA, TOTAL_RULE_COUNT
from script import *
import random
import logging
import copy
from app.forms import TYPE_SELECTION_DICT, HINT_SELECTION_DICT, MORE_GEN_SELECTION_DICT

TYPE_MISMATCH_RETRY_LIMIT = 50
gen: Generator
question_result: dict
size: int
LOGGER = logging.getLogger("app.logger")
show_ur = False
show_full_phonemes = False


@app.route('/index', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():
    global question_result, size, show_ur, show_full_phonemes

    gen_spec_form = GenerationSpec()
    hint_form = GetHint()

    generate_more_form = GenerateMore()
    answer_form = ShowAnswer()

    if gen_spec_form.submit.data and gen_spec_form.validate_on_submit():
        size = int(gen_spec_form.question_size.data)
        question_result = generate_questions(DEFAULT_DATA, gen_spec_form.rule_selection.data,
                                             int(gen_spec_form.type_selection.data),
                                             size,
                                             bool(gen_spec_form.randomize_order.data),
                                             bool(gen_spec_form.use_ipa_g.data),
                                             None)

        if question_result is None:
            LOGGER.debug("No data recorded (None).")
            return redirect(url_for('index'))
        else:
            LOGGER.info("Data recorded: \nUR %s\nSR %s\nPOI %s\n%s\n" % (
                [str(s) for s in question_result['UR']], [str(s) for s in question_result['SR']],
                [str(s) for s in question_result['phone_interest']],
                gen.get_log_stamp()))
            return render_template('index.html', title='Result', gen_form=gen_spec_form, hint_form=hint_form,
                                   gen_more_form=generate_more_form, answer_form=answer_form, data=question_result,
                                   size=size)

    if hint_form.submit_hint.data and hint_form.validate_on_submit() and 'question_result' in globals():
        hint_selection = hint_form.hints.data

        if HINT_SELECTION_DICT[hint_selection] == "ur":
            show_ur = True

        if HINT_SELECTION_DICT[hint_selection] == "fp":
            show_full_phonemes = True

        return render_template('index.html', title='Result', gen_form=gen_spec_form, hint_form=hint_form,
                               gen_more_form=generate_more_form, answer_form=answer_form, data=question_result,
                               size=size, show_full_phonemes=show_full_phonemes, show_ur=show_ur)

    if generate_more_form.submit_request.data and generate_more_form.validate_on_submit() and \
            'question_result' in globals() and 'gen' in globals():
        generate_selection = generate_more_form.requested_type.data
        more_data = None

        if MORE_GEN_SELECTION_DICT[generate_selection] == "CADT":
            more_data = gen.generate(_get_gen_mode(bool(gen_spec_form.use_ipa_g.data)), [5, 0, 0, 0, 0], False, False,
                                     DEFAULT_DATA['f2t'], DEFAULT_DATA['f2ss'], DEFAULT_DATA['gloss_grp'])

        if MORE_GEN_SELECTION_DICT[generate_selection] == "CAND":
            more_data = gen.generate(_get_gen_mode(bool(gen_spec_form.use_ipa_g.data)), [0, 0, 5, 0, 0], False, False,
                                     DEFAULT_DATA['f2t'], DEFAULT_DATA['f2ss'], DEFAULT_DATA['gloss_grp'])

        if MORE_GEN_SELECTION_DICT[generate_selection] == "NCAD":
            more_data = gen.generate(_get_gen_mode(bool(gen_spec_form.use_ipa_g.data)), [0, 0, 0, 5, 0], False, False,
                                     DEFAULT_DATA['f2t'], DEFAULT_DATA['f2ss'], DEFAULT_DATA['gloss_grp'])

        if more_data is not None:
            question_result['UR'].extend(more_data['UR'])
            question_result['SR'].extend(more_data['SR'])
            question_result['Gloss'].extend(more_data['Gloss'])
            size += len(more_data['UR'])

        return render_template('index.html', title='Result', gen_form=gen_spec_form, hint_form=hint_form,
                               gen_more_form=generate_more_form, answer_form=answer_form, data=question_result,
                               size=size, show_full_phonemes=show_full_phonemes,
                               show_ur=show_ur)

    if answer_form.show_answer.data and answer_form.validate_on_submit() and 'question_result' in globals():
        return render_template('index.html', title='Result', gen_form=gen_spec_form, hint_form=hint_form,
                               gen_more_form=generate_more_form, answer_form=answer_form, data=question_result,
                               size=size, show_full_phonemes=True, show_ur=True,
                               show_answer=True)

    return render_template('index.html', title='Demo', gen_form=gen_spec_form, hint_form=hint_form,
                           gen_more_form=generate_more_form, answer_form=answer_form)


@app.route('/prof', methods=['GET', 'POST'])
def prof():
    global question_result, size
    from script.data_factory import translate_phoneme_data, translate_templates_data, translate_rule_data

    prof_gen = ProfGenForm()

    if prof_gen.submit.data and prof_gen.validate_on_submit():
        template_data = prof_gen.template.data
        rule_data = prof_gen.rule_raw.data
        phoneme_data = prof_gen.phoneme_sound.data

        customized_data = copy.deepcopy(DEFAULT_DATA)
        customized_data['templates'] = translate_templates_data(customized_data, template_data)
        if rule_data is None or len(rule_data) == 0 or str(rule_data).isspace():
            rule = None
        else:
            rule = translate_rule_data(customized_data, rule_data)

        if phoneme_data is None or len(phoneme_data) == 0 or str(phoneme_data).isspace():
            phonemes = None
        else:
            phonemes = translate_phoneme_data(phoneme_data)

        size = int(prof_gen.question_size.data)

        question_result = generate_questions(customized_data, rule, 1, size,
                                             bool(prof_gen.randomize_order.data),
                                             bool(prof_gen.use_ipa_g.data), phonemes)

        if question_result is None:
            LOGGER.debug("No data recorded (None).")
            return redirect(url_for('index'))
        else:
            LOGGER.info("Data recorded: \nUR %s\nSR %s\nPOI %s\n%s\n" % (
                [str(s) for s in question_result['UR']], [str(s) for s in question_result['SR']],
                [str(s) for s in question_result['phone_interest']], gen.get_log_stamp()))
            return render_template('prof.html', title='Result', prof_gen=prof_gen, data=question_result, size=size)

    return render_template('prof.html', title='Professor Mode', prof_gen=prof_gen)


def generate_questions(data_set, rule_selection_data, type_selection: int, size_: int, is_shuffled: bool,
                       use_ipa_g: bool, phonemes):
    LOGGER.debug("Type Selection: %s", str(type_selection))
    is_selected = rule_selection_data is not None and (
            type(rule_selection_data) == int or type(rule_selection_data) == Rule)
    LOGGER.debug("Manual Selection: %s", str(is_selected))
    is_manual_phoneme = phonemes is not None

    if type(rule_selection_data) == Rule:
        rule_selection = rule_selection_data
    elif is_selected:
        rule_selection = data_set['rules'][int(rule_selection_data)]  # type: Rule
    else:
        rule_selection = data_set['rules'][random.randint(0, TOTAL_RULE_COUNT - 1)]  # type: Rule

    classification_match_retry = 0

    while True:
        if classification_match_retry > TYPE_MISMATCH_RETRY_LIMIT:
            LOGGER.error("Can not seem to get matched phoneme & rule to conform classification")
            return None

        if not is_manual_phoneme:
            phonemes = get_random_phonemes([rule_selection.get_a_matcher(None, None, data_set['f2ss']),
                                            rule_selection.get_c_matchers(None, data_set['f2ss']),
                                            rule_selection.get_d_matchers(None, data_set['f2ss'])])

        type_ = rule_selection.get_rule_type(phonemes, data_set['f2t'], data_set['f2ss'])

        if TYPE_SELECTION_DICT[type_selection] is not None and TYPE_SELECTION_DICT[type_selection] != type_:
            if is_manual_phoneme and is_selected:
                LOGGER.error("Can not seem to get matched phoneme & rule to conform classification")
                return None

            classification_match_retry += 1

            if not is_selected:
                rule_selection = data_set['rules'][random.randint(0, TOTAL_RULE_COUNT - 1)]

            continue

        break

    LOGGER.debug("Shuffle Result: %s", str(is_shuffled))

    return _get_valid_data(data_set, rule_selection, phonemes, size_, is_shuffled, _get_gen_mode(use_ipa_g), str(type_))


def _get_valid_data(data_set, rule_selected: Rule, phonemes: list, size_: int, is_shuffled: bool, gen_mode: GenMode,
                    type_: str):
    global gen
    data_ = None

    try:
        gen = Generator(phonemes, data_set['templates'], rule_selected, 5,
                        data_set['f2t'], data_set['f2ss'])
        data_ = gen.generate(gen_mode, size_, True, is_shuffled, data_set['f2t'],
                             data_set['f2ss'],
                             data_set['gloss_grp'])
        data_['generator'] = gen
        data_['rule_type'] = type_
    except GenerationNoCADTError or GeneratorParameterError or GeneratorError:
        LOGGER.exception('')
    except Exception as err:
        LOGGER.exception("UNEXPECTED ERROR")
        raise err

    return data_


def _get_gen_mode(use_ipa_g: bool) -> GenMode:
    if use_ipa_g:
        return GenMode.IPAg
    else:
        return GenMode.nIPAg
