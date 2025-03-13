from app.models.base_model import BaseModel
from app.models.user import User
from app import db
from sqlalchemy.orm import relationship
from app.models.place_amenity import place_amenity


class Place(BaseModel):
    """Place class that inherits from BaseModel."""
   
    __tablename__ = 'places'

    title = db.Column(db.String(36), nullable=False)
    description = db.Column(db.String(), nullable=False)
    price = db.Column(db.Float(), nullable=False)
    latitude = db.Column(db.Float(), nullable=False)
    longitude = db.Column(db.Float(), nullable=False)
    owner_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    reviews = db.relationship('Review', backref='place', lazy=True)
    amenities = db.relationship('Amenity', secondary=place_amenity, lazy='subquery', backref=db.backref('places', lazy=True))

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

    @property
    def title(self):
        return self.__title
    
    @title.setter
    def title(self, value):
        if not value:
            raise ValueError("title is required")
        if len(value) > 100:
            raise ValueError("title must be less than 100 characters")
        self.__title = value

    @property
    def price(self):
        return self.__price

    @price.setter
    def price(self, value):
        if value <= 0:
            raise ValueError("price must be greater than 0")
        self.__price = value

    @property
    def latitude(self):
        return self.__latitude

    @latitude.setter
    def latitude(self, value):
        if not (90.0 >= value >= -90.0):
            raise ValueError("Latitude must be beewteen 90.0 and -90.0")
        self.__latitude = value

    @property
    def longitude(self):
        return self.__longitude

    @longitude.setter
    def longitude(self, value):
        if not (180.0 >= value >= -180.0):
            raise ValueError("longitude must be beewteen 180 and -180")
        self.__longitude = value

    @property
    def owner(self):
        return self.__owner_id

    @owner.setter
    def owner(self, value):
        if not isinstance(value, User):
            raise ValueError("owner must be a User instance")
        self.__owner_id = value
