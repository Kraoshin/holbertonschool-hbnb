<<<<<<< HEAD
from app.models.base_model import BaseModel
from app import db
import uuid
from sqlalchemy.orm import relationship
from app.models.place_amenity import place_amenity

class Amenity(BaseModel):
    """Amenity class that inherits from BaseModel."""
    __tablename__ = 'amenities'

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = db.Column(db.String(50), nullable=False)
    
=======
from app import db
from .basemodel import BaseModel
from sqlalchemy.orm import validates

class Amenity(BaseModel):
    """Represents an amenity in the hbnb app."""
    __tablename__ = 'amenities'

    name = db.Column(db.String(50), nullable=False)

    @validates("name")
    def validator(self, key, value):
        if not value or len(value) > 50:
            raise ValueError("Name must be a required with a maximum of " 
                             "50 characters")
        return value
>>>>>>> c9af39ae (models update and add systeme auth)
