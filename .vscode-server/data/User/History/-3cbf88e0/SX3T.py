from .basemodel import BaseModel
from .user import User
from .amenity import Amenity
from app import db
from sqlalchemy.orm import relationship
from app.models.place_amenity import place_amenity


class Place(BaseModel):
    __tablename__ = 'places'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(1024), nullable=True)
    price = db.Column(db.Float, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    reviews = relationship('Review', backref='place', lazy = True)
    amenities = relationship('Amenity', secondary=place_amenity, lazy = 'subquery',
                             backref=db.backref('places', lazy=True))
