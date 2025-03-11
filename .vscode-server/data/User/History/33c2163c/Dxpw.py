from app import db, bcrypt
import uuid
from .basemodel import BaseModel


class User(BaseModel):
     
    __tablename__ = 'users'

    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(128), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<User {self.first_name} {self.last_name}>'

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, value):
        if not value:
            raise ValueError("email is required.")
        if not re.fullmatch(
         r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$', value):
            raise ValueError("The email format is invalid.")
        self._email = value

    @property
    def is_admin(self):
        return self._is_admin

    @is_admin.setter
    def is_admin(self, value):
        if not isinstance(value, bool):
            raise ValueError("is_admin must be a boolean.")
        self._is_admin = value

    @property
    def first_name(self):
        return self._first_name

    @first_name.setter
    def first_name(self, value):
        if not value or len(value) > 50:
            raise ValueError("First name is required with max 50 characters.")
        if not re.fullmatch(r'^[A-Za-zÀ-ÖØ-öø-ÿ \' -]{2,}+$', value) or value.strip() == "":
            raise ValueError("The first name is invalid.")
        self._first_name = value

    @property
    def last_name(self):
        return self._last_name

    @last_name.setter
    def last_name(self, value):
        if not value or len(value) > 50:
            raise ValueError("Last name is required with max 50 characters.")
        if not re.fullmatch(r'^[A-Za-zÀ-ÖØ-öø-ÿ \' -]{2,}+$', value) or value.strip() == "":
            raise ValueError("The last name is invalid.")
        self._last_name = value
    
    def verify_password(self, password):
        """Verifies if the provided password matches the hashed password"""
        return bcrypt.check_password_hash(self.password, password)

    def hash_password(self, password):
        """Hashes the password before storing it."""
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')
