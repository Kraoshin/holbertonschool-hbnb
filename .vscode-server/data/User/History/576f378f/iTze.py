from .basemodel import BaseModel
from app.models.place import Place
from app.models.user import User
from app import db
from sqlalchemy.orm import relationship


class Review(BaseModel):
     __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(1024), nullable=False)
    place_id = db.Column(db.Integer, ForeignKey('places.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
