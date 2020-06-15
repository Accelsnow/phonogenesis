from flask import request, jsonify
from app import app
from app import DEFAULT_DATA, TOTAL_RULE_COUNT
from script import *
import random
import logging
import copy

TYPE_MISMATCH_RETRY_LIMIT = 50
gen: Generator
question_result: dict
size: int
LOGGER = logging.getLogger("app.logger")
show_ur = False
show_full_phonemes = False


@app.route('/env', methods=['GET', 'POST'])
def environment_data():
    return jsonify(DEFAULT_DATA)
