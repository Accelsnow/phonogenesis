from flask import jsonify, request, json, session, abort
from app import app, DEFAULT_DATA, socketio
# from flask_login import current_user, login_user
from app.models import User, Message, Group, UserGroup
from script import *
import logging

TYPE_MISMATCH_RETRY_LIMIT = 50
LOGGER = logging.getLogger("app.logger")
show_ur = False
show_full_phonemes = False


@socketio.on('disconnect')
def reset_on_exit():
    session.pop('user', None)


@app.route('/env', methods=['GET', 'POST'])
def environment_data():
    return jsonify(DEFAULT_DATA)


@app.route('/user/login', methods=['GET', 'POST'])
def login():
    if 'user' in session:
        return jsonify(result=session['user'])

    username = request.json['username']
    password = request.json['password']
    user = User.query.filter_by(username=username).first()
    if user is None or not user.check_password(password):
        return jsonify(result=None)
    session['user'] = user
    return jsonify(result=session['user'])


def _parse_full_user(user: User):
    pass


@app.route('/user/check-session', methods=['GET', 'POST'])
def check_session():
    if 'user' in session:
        return jsonify(currentUser=session['user'])
    else:
        return jsonify(currentUser=None)


@app.route('/user/groups', methods=['POST'])
def get_user_groups():
    if 'user' not in session:
        abort(401)
    curr_user = session['user']
    usergroup_entries = UserGroup.query.filter_by(user_id=curr_user.id).all()
    return jsonify(result=usergroup_entries)
