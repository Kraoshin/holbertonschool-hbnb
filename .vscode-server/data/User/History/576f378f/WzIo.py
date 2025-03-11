from app.models.basemodel import BaseModel
from app.models.place import Place
from app.models.user import User
from app import db
from sqlalchemy.orm import relationship

"""Review module for the HBnB project.

This module contains the Review class, which defines reviews for places
in the HBnB project.
"""


class Review(BaseModel):
    """Review class that inherits from BaseModel."""
    __tablename__ = 'reviews'

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    text = db.Column(db.String(1024), nullable=False)
    place_id = db.Column(db.String(36), db.ForeignKey('places.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
