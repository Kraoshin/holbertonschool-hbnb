from sqlalchemy import Table, Column, Integer, ForeignKey
from app import db

place_amenity = Table('place_amenity', db.Model.metadata,
                      Column('place_id', Integer, ForeignKey('places.id'), primary_key=True),
                      Column('amenity_id', Integer, ForeignKey('amenities.id'), primary_key=True)
)