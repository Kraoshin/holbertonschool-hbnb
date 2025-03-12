import re
from .basemodel import BaseModel


class User(BaseModel):
    def __init__(self, first_name, last_name, email, is_admin=False):
        super().__init__()
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.is_admin = is_admin

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
