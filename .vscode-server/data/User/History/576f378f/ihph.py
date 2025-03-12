from .basemodel import BaseModel
from app import db
from sqlalchemy import ForeignKey


class Review(BaseModel):
    __tablename__ = 'reviews'

    text = db.Column(db.String(1024), nullable=False)
    place_id = db.Column(db.Integer, ForeignKey('places.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
