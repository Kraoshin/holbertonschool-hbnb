from app.models.basemodel import BaseModel
from app.models.user import User
from app import db
from sqlalchemy.orm import relationship
from app.models.place_amenity import place_amenity


class Place(BaseModel):
    """Represents a place in the hbnb"""

    __tablename__ = 'places'

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(1024), nullable=True)
    price = db.Column(db.Float, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    reviews = relationship('Review', backref='place', lazy = True)
    amenities = relationship('Amenity', secondary=place_amenity, lazy = 'subquery',
                             backref=db.backref('places', lazy=True))

    def add_review(self, review):
        """Add a review to the place."""
        self.reviews.append(review)
    
    def remove_review(self, review):
        """Remove a review from the place."""
        if review in self.reviews:
            self.reviews.remove(review)

    def add_amenity(self, amenity):
        """Add an amenity to the place."""
        self.amenities.append(amenity)

    def remove_amenity(self, amenity):
        """Remove an amenity from the place."""
        if amenity in self.amenities:
            self.amenities.remove(amenity)
