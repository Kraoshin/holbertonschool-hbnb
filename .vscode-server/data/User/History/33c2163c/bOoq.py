from app.models.basemodel import BaseModel
from email_validator import validate_email, EmailNotValidError
import re
from app import bcrypt, db
from sqlalchemy.orm import validates, relationship

     
class User(BaseModel):
    """Represents a user in the hbnb app."""

    __tablename__ = 'users'

    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(128), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    places = relationship('Place', backref='owner', lazy=True)
    reviews = relationship('Review', backref='author', lazy=True)

    @validates("email", include_backrefs=False)
    def validate_email(self, key, value):
        regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(regex, value):
            return EmailNotValidError("Email format not valid.")
        return value
        
    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
