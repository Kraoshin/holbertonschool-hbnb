from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship
from app import db

db = SQLAlchemy()

place_amenity = Table('place_amenity', db.Model.metadata,
                      Column('place_id', Integer, ForeignKey('places.id'), primary_key=True),
                      Column('amenity_id', Integer, ForeignKey('amenities.id'), primary_key=True)
                      )
