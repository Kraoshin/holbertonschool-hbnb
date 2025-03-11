from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship
from app import db

db = SQLAlchemy()

place_amenity = Table('place_amenity', db.Model.metadata,
                      Column('place_id', Integer, ForeignKey('places.id'), primary_key=True),
                      Column('amenity_id', Integer, ForeignKey('amenities.id'), primary_key=True)
)

class Place(db.Model):
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
