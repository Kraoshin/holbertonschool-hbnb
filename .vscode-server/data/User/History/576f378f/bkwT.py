from .basemodel import BaseModel
from app import db
from sqlalchemy import ForeignKey


class Review(BaseModel):

    __tablename__ = 'reviews'

    text = db.Column(db.String(150), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    place_id = db.Column(db.String(36), db.ForeignKey('places.id'), nullable=False)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
