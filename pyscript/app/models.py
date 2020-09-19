from app import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash


class Message(db.Model):
    __tablename__ = 'message'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(256))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    from_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    to_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    from_user = db.relationship("User", back_populates='sent_messages', foreign_keys=[from_user_id])
    to_user = db.relationship("User", back_populates='recv_messages', foreign_keys=[to_user_id])

    def serialize(self):
        return {'id': self.id, 'content': self.content, 'timestamp': str(self.timestamp),
                'from_user_id': self.from_user_id, 'to_user_id': self.to_user_id, 'from_user': self.from_user,
                'to_user': self.to_user}

    def __repr__(self):
        return '<Message({}) from {} to {}: {}>'.format(self.id, self.from_user_id, self.to_user_id, self.content)


class Group(db.Model):
    __tablename__ = 'group'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), unique=True, index=True, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    owner = db.relationship("User", back_populates="owned_groups", foreign_keys=[owner_id])
    users_bond = db.relationship('UserGroup', back_populates="group")

    def users(self) -> list:
        return [bond.user for bond in self.users_bond]

    def serialize(self):
        return {'id': self.id, 'name': self.name, 'owner_id': self.owner_id, 'owner': self.owner, 'users': self.users()}

    def __repr__(self):
        return '<Group {} {} Owner {}>'.format(self.id, self.name, self.owner_id)


class Quiz(db.Model):
    __tablename__ = 'quiz'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    owner = db.relationship("User", back_populates='owned_quizzes', foreign_keys=[owner_id])
    attempts = db.relationship("Attempt", back_populates='quiz')
    questions_bond = db.relationship("QuizQuestion", back_populates='quiz')
    targets_bond = db.relationship("UserQuiz", back_populates="quiz")

    def questions(self) -> list:
        return [bond.question for bond in self.questions_bond]

    def targets(self) -> list:
        return [bond.targets for bond in self.targets_bond]

    def serialize(self):
        return {'id': self.id, 'name': self.name, 'owner_id': self.owner_id, 'owner': self.owner,
                'attempts': self.attempts, 'questions': self.questions(), 'targets': self.targets()}

    def __repr__(self):
        return '<Quiz {} {} Owner {} {}>'.format(self.id, self.name, self.owner_id, self.owner.username)


class UserQuiz(db.Model):
    __tablename__ = 'userquiz'
    id = db.Column(db.Integer, primary_key=True)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    quiz = db.relationship("Quiz", back_populates="targets_bond", foreign_keys=[quiz_id])
    user = db.relationship("User", back_populates="recv_quizzes_bond", foreign_keys=[user_id])

    def serialize(self):
        return {'id': self.id, 'username': self.user.username, 'quiz': self.quiz.name,
                'quiz_owner': self.quiz.owner.username}

    def __repr__(self):
        return '<Quiz {} User {}>'.format(self.quiz_id, self.user_id)


class QuizQuestion(db.Model):
    __tablename__ = 'quizquestion'
    id = db.Column(db.Integer, primary_key=True)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'), nullable=False)

    quiz = db.relationship("Quiz", back_populates='questions_bond', foreign_keys=[quiz_id])
    question = db.relationship("Question", back_populates='quizzes_bond', foreign_keys=[question_id])

    def serialize(self):
        return {'id': self.id, 'question_id': self.question_id, 'quiz_id': self.quiz_id}

    def __repr__(self):
        return '<Quiz {} Question {}>'.format(self.quiz_id, self.question_id)


class Attempt(db.Model):
    __tablename__ = 'tablename'
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)
    answers = db.Column(db.PickleType, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'), nullable=False)

    quiz = db.relationship("Quiz", back_populates="attempts", foreign_keys=[quiz_id])
    user = db.relationship("User", back_populates="quiz_attempts", foreign_keys=[user_id])

    def serialize(self):
        return {'id': self.id, 'score': self.score, 'answers': self.answers, 'timestamp': self.timestamp,
                'user_id': self.user_id, 'quiz_id': self.quiz_id}

    def __repr__(self):
        return '<Attempt({}) User {} {} Quiz {} {} Score {}>'.format(self.id, self.user_id, self.user.username,
                                                                     self.quiz_id, self.quiz.name, self.score)


class Question(db.Model):
    __tablename__ = 'question'
    id = db.Column(db.Integer, primary_key=True)

    templates = db.Column(db.PickleType, nullable=False)
    poi = db.Column(db.String(128), nullable=False)
    ruleType = db.Column(db.String(32), nullable=False)
    phoneme = db.Column(db.String(128), nullable=False)
    ruleTxt = db.Column(db.String(256), nullable=False)
    gloss = db.Column(db.PickleType, nullable=False)
    UR = db.Column(db.PickleType, nullable=False)
    SR = db.Column(db.PickleType, nullable=False)

    size = db.Column(db.Integer, default=20)
    canUR = db.Column(db.Boolean, default=False)
    canPhoneme = db.Column(db.Boolean, default=False)
    maxCADT = db.Column(db.Integer, default=5)

    quizzes_bond = db.relationship("QuizQuestion", back_populates='question')

    def quizzes(self) -> list:
        return [bond.quiz for bond in self.quizzes_bond]

    def serialize(self):
        return {'id': self.id, 'templates': self.templates, 'poi': self.poi,
                'ruleType': self.ruleType, 'phoneme': self.phoneme, 'ruleTxt': self.ruleTxt, 'gloss': self.gloss,
                'UR': self.UR, 'SR': self.SR, 'size': self.size, 'canUR': self.canUR, 'canPhoneme': self.canPhoneme,
                'maxCADT': self.maxCADT, 'quizzes': self.quizzes()}

    def __repr__(self):
        return '<Rule {} {}>'.format(self.id, self.ruleTxt)


class UserGroup(db.Model):
    __tablename__ = 'usergroup'
    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    group = db.relationship("Group", back_populates="users_bond", foreign_keys=[group_id])
    user = db.relationship("User", back_populates="joined_groups_bond", foreign_keys=[user_id])

    def serialize(self):
        return {'id': self.id, 'user_id': self.user_id, 'group_id': self.group_id, 'group': self.group,
                'user': self.user}

    def __repr__(self):
        return '<Group {} User {}>'.format(self.group_id, self.user_id)


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(10), index=True, unique=False, nullable=False)
    name = db.Column(db.String(64), index=True, unique=False, nullable=False)
    email = db.Column(db.String(64), index=True, unique=False, nullable=False)
    username = db.Column(db.String(64), index=True, unique=True, nullable=False)
    password_hash = db.Column(db.String(128))

    joined_groups_bond = db.relationship('UserGroup', back_populates="user")
    owned_groups = db.relationship('Group', back_populates="owner")
    quiz_attempts = db.relationship('Attempt', back_populates='user')

    recv_quizzes_bond = db.relationship('UserQuiz', back_populates='user')
    owned_quizzes = db.relationship('Quiz', back_populates='owner')
    recv_messages = db.relationship('Message', back_populates='to_user',
                                    primaryjoin='and_(User.id==Message.to_user_id)')
    sent_messages = db.relationship('Message', back_populates='from_user',
                                    primaryjoin='and_(User.id==Message.from_user_id)')

    def set_password(self, password: str) -> None:
        self.password_hash = generate_password_hash(password)

    def check_password(self, password: str) -> bool:
        if len(password) == 0:
            return False
        return check_password_hash(self.password_hash, password)

    def joined_groups(self) -> list:
        return [bond.group for bond in self.joined_groups_bond]

    def recv_quizzes(self) -> list:
        return [bond.quiz for bond in self.recv_quizzes_bond]

    def serialize(self):
        return {'id': self.id, 'type': self.type, 'name': self.name, 'email': self.email, 'username': self.username,
                'joined_groups': self.joined_groups(), 'owned_groups': self.owned_groups,
                'quiz_attempts': self.quiz_attempts, 'recv_quizzes': self.recv_quizzes(),
                'owned_quizzes': self.owned_quizzes, 'recv_messages': self.recv_messages,
                'sent_messages': self.sent_messages}

    def __repr__(self):
        return '<User {} {}>'.format(self.id, self.username)
