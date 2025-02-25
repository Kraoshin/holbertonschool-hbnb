from .basemodel import BaseModel

class Place(BaseModel):
    def __init__(self, title, description, price, latitude, longitude, owner_id, amenities=None):
        super().__init__()
        self.title = title
        self.description = description
        self.price = price
        self.latitude = latitude
        self.longitude = longitude
        self.owner = owner_id
        self.reviews = []  # List to store related reviews
        self.amenities = amenities or []  # List to store related amenities


    def validator(self):
        if  len(self.title) >= 100 and not self.title:
            raise ValueError("title is required and must be euqal or less to 100 charactere")
        if self.price <= 0:
            raise ValueError("the price must be greater than 0")
        if not (90 >= self.latitude >= -90):
            raise ValueError("Latitude must be beewteen 90 and -90")
        if not (180 >= self.longitude >= -180):
            raise ValueError("Longitude must be beewteen 180 and -180")

    def add_review(self, review):
        """Add a review to the place."""
        self.reviews.append(review)

    def add_amenity(self, amenity):
        """Add an amenity to the place."""
        self.amenities.append(amenity)
    
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
        if not (90 >= value >= -90):
            raise ValueError("Latitude must be beewteen 90 and -90")
        self.__latitude = value
    
    @property
    def longitude(self):
        return self.__longitude
    
    @longitude.setter
    def longitude(self, value):
        if not (180 >= value >= -180):
            raise ValueError("longitude must be beewteen 180 and -180")
        self.__longitude = value