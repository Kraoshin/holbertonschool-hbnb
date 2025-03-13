from .basemodel import BaseModel
from app import db
from app.models.place import Place
from app.models.user import User
from sqlalchemy.orm import validates


class Review(BaseModel):
    __tablename__ = 'reviews'

    text = db.Column(db.String(1024), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    place_id = db.Column(db.String(36), db.ForeignKey('places.id'), nullable=False)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)

    @validates('text')
    def validate_text(self, key, value):
        if not value and len(value) > 50:
            raise ValueError("Text must be less than 50 characters")
        return value

    @validates('rating')
    def validate_rating(self, key, value):
        if not value or not (1 <= value <= 5):
            raise ValueError("Rating must be between 1 and 5")
        return value

    @validates('user_id')
    def validate_user_id(self, key, value):
        if not isinstance(value, User):
            raise ValueError("User not found, please enter a valid username")
        return value

    @validates('place_id')
    def validate_place_id(self, key, value):
        if not isinstance(value, Place):
            raise ValueError("Place not found, please enter a valid place")
        return value