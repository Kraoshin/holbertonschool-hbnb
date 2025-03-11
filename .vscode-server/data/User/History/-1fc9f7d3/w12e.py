# Local import to avoid circular import
from app.models.user import User
from app import db

class UserRepository:
    def __init__(self, db):
        self.db = db

    def add_user(self, user):
        self.db.session.add(user)
        self.db.session.commit()

    def get_user_by_username(self, username):
        return User.query.filter_by(username=username).first()

    def get_user_by_email(self, email):
        return User.query.filter_by(email=email).first()
