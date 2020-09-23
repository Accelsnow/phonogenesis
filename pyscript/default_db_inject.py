from app import db
from app.models import User, Message, Group, UserGroup, Quiz, UserQuiz, QuizQuestion, Attempt, Question

if __name__ == '__main__':
    usr_stu = User(id=1, username='stu', type='student', email='stu@mail.com', name='stuname')
    usr_stu.set_password('stu')
    usr_prf = User(id=2, username='prof', type='professor', email='prof@mail.com', name='profname')
    usr_prf.set_password('prof')
    usr_adm = User(id=3, username='admin', type='admin', email='admin@mail.com', name='adminname')
    usr_adm.set_password('admin')
    grp = Group(id=1, name='pg1', owner_id=2)
    usr_grp = UserGroup(group_id=1, user_id=1)
    msg = Message(content='This is a default message', from_user_id=2, to_user_id=1)

    db.session.add(usr_stu)
    db.session.add(usr_prf)
    db.session.add(usr_adm)
    db.session.add(grp)
    db.session.add(usr_grp)
    db.session.add(msg)
    db.session.commit()
