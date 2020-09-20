from flask import jsonify, request, json, session, abort, make_response
from app import app, DEFAULT_DATA, socketio, db
# from flask_login import current_user, login_user
from app.models import User, Message, Group, UserGroup
from script import *
from sqlalchemy.exc import IntegrityError, InvalidRequestError
import logging

TYPE_MISMATCH_RETRY_LIMIT = 50
LOGGER = logging.getLogger("app.logger")
show_ur = False
show_full_phonemes = False
ACCOUNT_TYPES = ['student', 'professor', 'admin']


@socketio.on('disconnect')
def reset_on_exit():
    session.pop('user', None)


@app.route('/env', methods=['GET'])
def environment_data():
    return jsonify(DEFAULT_DATA)


@app.route('/user/login', methods=['POST'])
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


def _validate_session():
    return 'user' in session and session['user']


@app.route('/user/logout', methods=['GET'])
def logout():
    session.pop('user', None)
    return jsonify()


@app.route('/user/check-session', methods=['GET'])
def check_session():
    if _validate_session():
        session['user'] = User.query.get(session['user']['id'])
        return jsonify(currentUser=session['user'])
    else:
        return jsonify(currentUser=None)


@app.route('/users', methods=['GET'])
def get_users():
    if not _validate_session():
        abort(401)
    return jsonify(User.query.all())


@app.route('/user/<username>', methods=['DELETE'])
def delete_user(username):
    if not _validate_session() or session['user']['type'] != 'admin':
        abort(401)

    target_user = User.query.filter_by(username=username).first()
    if target_user:
        db.session.delete(target_user)
        db.session.commit()
        return jsonify(success=True)
    else:
        return jsonify(success=False, message='No user with username {} found'.format(username))


@app.route('/user', methods=['POST'])
def create_user():
    if not _validate_session():
        abort(401)
    data = request.json
    if 'name' not in data or 'type' not in data or 'email' not in data or 'username' not in data or 'password' not in data:
        abort(400)

    name = data['name']
    type_ = data['type']
    email = data['email']
    username = data['username']
    password = data['password']

    if type_ not in ACCOUNT_TYPES:
        abort(400)
    if type_ != 'student' and session['user']['type'] != 'admin':
        abort(401)

    new_user = User(name=name, type=type_, email=email, username=username)
    new_user.set_password(password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify(success=True)
    except IntegrityError:
        return jsonify(success=False, message='User creation failed(username unique? non-empty password?)')


@app.route('/user/groups', methods=['POST'])
def get_user_groups():
    if not _validate_session():
        abort(401)
    curr_user = session['user']
    usergroup_entries = UserGroup.query.filter_by(user_id=curr_user.id).all()
    return jsonify(result=usergroup_entries)


@app.route('/message/<msgid>', methods=['DELETE'])
def delete_message(msgid):
    if not _validate_session():
        abort(401)

    try:
        message_id = int(msgid)
    except ValueError:
        return jsonify(success=False, message='Message id must be an integer!')
    target_message = Message.query.get(int(message_id))

    if not target_message:
        return jsonify(success=False, message='Message with id {} does not exist.'.format(msgid))

    if session['user']['type'] != 'admin' and target_message.from_user_id != session[
        'user']['id'] and target_message.to_user_id != session['user']['id']:
        abort(401)

    db.session.delete(target_message)
    db.session.commit()
    return jsonify(success=True)


@app.route('/message/<username>', methods=['POST'])
def send_message(username):
    if not _validate_session():
        abort(401)
    if 'message' not in request.json:
        abort(400)

    target_user = User.query.filter_by(username=username).first()

    if not target_user:
        return jsonify(success=False, message="Target user {} does not exist.".format(username))

    message = Message(content=request.json['message'], from_user_id=session['user']['id'], to_user_id=target_user.id)
    db.session.add(message)
    db.session.commit()
    return jsonify(success=True)


@app.route('/groups', methods=['GET'])
def get_groups():
    if not _validate_session():
        abort(401)
    return jsonify(Group.query.all())


@app.route('/group/user', methods=['PATCH'])
def remove_from_group():
    if not _validate_session():
        abort(401)
    print(request.json)
    if 'userid' not in request.json or 'groupid' not in request.json:
        abort(400)
    if request.json['userid'] != session['user']['id'] and session['user']['type'] == 'student':
        abort(401)
    try:
        user_id = int(request.json['userid'])
        group_id = int(request.json['groupid'])
    except ValueError:
        abort(400)
        return
    target_links = UserGroup.query.filter_by(user_id=user_id, group_id=group_id).all()
    if not target_links or len(target_links) == 0:
        return jsonify(success=False,
                       message="User {} is not in group {} or they do not exist.".format(user_id, group_id))
    for link in target_links:
        db.session.delete(link)
    db.session.commit()
    return jsonify(success=True)


@app.route('/group/user', methods=['POST'])
def add_to_group():
    if not _validate_session() or session['user']['type'] == 'student':
        abort(401)
    if 'username' not in request.json or 'groupid' not in request.json:
        abort(400)
    try:
        group_id = int(request.json['groupid'])
    except ValueError:
        abort(400)
        return
    target_user = User.query.filter_by(username=request.json['username']).first()
    if not target_user:
        return jsonify(success=False, message="User {} does not exist!".format(request.json['username']))
    if UserGroup.query.filter_by(user_id=target_user.id, group_id=group_id).first():
        return jsonify(success=False, message="User {} already enrolled in the group!".format(request.json['username']))
    new_link = UserGroup(user_id=target_user.id, group_id=group_id)
    db.session.add(new_link)
    db.session.commit()
    return jsonify(success=True)


@app.route('/group', methods=['POST'])
def create_group():
    if not _validate_session() or session['user']['type'] == 'student':
        abort(401)
    if 'ownerid' not in request.json or 'name' not in request.json:
        abort(400)
    try:
        owner_id = int(request.json['ownerid'])
    except ValueError:
        abort(400)
        return
    new_group = Group(name=request.json['name'], owner_id=owner_id)

    try:
        db.session.add(new_group)
        db.session.commit()
        return jsonify(success=True)
    except IntegrityError:
        return jsonify(success=False, message="Group registration failed! (is group name unique?)")


@app.route('/group/<groupid>', methods=['DELETE'])
def delete_group(groupid):
    if not _validate_session() or session['user']['type'] == 'student':
        abort(401)
    try:
        group_id = int(groupid)
    except ValueError:
        abort(400)
        return

    target_group = Group.query.get(group_id)
    previous_members = target_group.users()
    db.session.delete(target_group)
    db.session.commit()
    return jsonify(success=True, students=previous_members)
