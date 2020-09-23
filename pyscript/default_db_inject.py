from app import db, get_formatted_timestr
from app.models import User, Message, Group, UserGroup, Quiz, UserQuiz, QuizQuestion, Attempt, Question

if __name__ == '__main__':
    usr_stu = User(id=1, username='adrianz', type='student', email='adrian@mail.com', name='Adrian Zhao')
    usr_stu.set_password('Adrian123')
    usr_prf = User(id=2, username='nathans', type='professor', email='nathans@mail.com', name='Nathan Sanders')
    usr_prf.set_password('Nathan123')
    usr_adm = User(id=3, username='admin', type='admin', email='admin@mail.com', name='admin')
    usr_adm.set_password('NathanPG123')
    grp = Group(id=1, name='default group', owner_id=2)
    usr_grp = UserGroup(group_id=1, user_id=1)
    msg1 = Message(content='This is a default message', from_user_id=2, to_user_id=1, timestamp=get_formatted_timestr())
    msg2 = Message(content='This is a default message', from_user_id=1, to_user_id=2, timestamp=get_formatted_timestr())

    db.session.add(usr_stu)
    db.session.add(usr_prf)
    db.session.add(usr_adm)
    db.session.add(grp)
    db.session.add(usr_grp)
    db.session.add(msg1)
    db.session.add(msg2)
    db.session.commit()
