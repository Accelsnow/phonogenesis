from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import GenerationSpec
from app import DEFAULT_DATA, TOTAL_RULE_COUNT
from script import *
import random


@app.route('/index', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():
    print([str(s) for s in DEFAULT_DATA['phonemes']])
    gen_spec_form = GenerationSpec()
    if gen_spec_form.validate_on_submit():
        # TODO: invalid input check

        DEFAULT_DATA['phonemes'] = get_random_phonemes()

        if gen_spec_form.rule_selection.data is not None:
            selection_num = int(gen_spec_form.rule_selection.data)
        else:
            selection_num = random.randint(0, TOTAL_RULE_COUNT - 1)

        size = 20
        gen = Generator(DEFAULT_DATA['phonemes'], DEFAULT_DATA['templates'], DEFAULT_DATA['rules'][selection_num],
                        5, DEFAULT_DATA['f2t'], DEFAULT_DATA['f2ss'])
        data = gen.generate(size, True, gen_spec_form.randomize_order.data, DEFAULT_DATA['f2t'], DEFAULT_DATA['f2ss'],
                            DEFAULT_DATA['gloss_grp'])

        return render_template('index.html', title='Result', form=gen_spec_form, data=data, size=size)

    return render_template('index.html', title='Demo', form=gen_spec_form)
