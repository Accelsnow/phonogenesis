from app import db
from datetime import datetime
from sqlalchemy.ext.mutable import MutableList
from werkzeug.security import generate_password_hash, check_password_hash


class Message(db.Model):
    __tablename__ = 'message'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(256))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    from_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    to_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    from_user = db.relationship("User", foreign_keys=[from_user_id])
    to_user = db.relationship("User", foreign_keys=[to_user_id])

    def serialize(self):
        return {'id': self.id, 'content': self.content, 'timestamp': str(self.timestamp),
                'from_user_id': self.from_user_id, 'to_user_id': self.to_user_id}

    def __repr__(self):
        return '<Message from {} to {}: {}>'.format(self.from_user_id, self.to_user_id, self.content)


class Group(db.Model):
    __tablename__ = 'group'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), unique=True, index=True, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    owner = db.relationship("User", back_populates="owned_groups")
    users = db.relationship('UserGroup', back_populates="group")

    def serialize(self):
        return {'id': self.id, 'name': self.name, 'owner': self.owner.username}

    def __repr__(self):
        return '<Group {} Owner {}>'.format(self.name, self.owner_id)


class UserGroup(db.Model):
    __tablename__ = 'usergroup'
    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    group = db.relationship("Group", back_populates="users")
    user = db.relationship("User", back_populates="joined_groups")

    def serialize(self):
        return {'id': self.id, 'username': self.user.username, 'group': self.group.name,
                'group_owner': self.group.owner.username}

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

    joined_groups = db.relationship('UserGroup', back_populates="user")
    owned_groups = db.relationship('Group', back_populates="owner")

    def set_password(self, password: str) -> None:
        self.password_hash = generate_password_hash(password)

    def check_password(self, password: str) -> bool:
        if len(password) == 0:
            return False
        return check_password_hash(self.password_hash, password)

    def serialize(self):
        messages = Message.query.filter_by(to_user_id=self.id).all()
        groups = UserGroup.query.filter_by(user_id=self.id).all()
        return {'id': self.id, 'type': self.type, 'name': self.name, 'email': self.email, 'username': self.username,
                'groups': groups, 'messages': messages}

    def __repr__(self):
        return '<User {}>'.format(self.username)
