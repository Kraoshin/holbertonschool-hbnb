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

    @validates('name')
    def validate_name(self, key, value):
        if not isinstance(value, str):
            raise TypeError("Name is invalid")
        if not value:
            raise ValueError("Name is required")
        if len(value) > 50:
            raise ValueError("Name is too long")
        return value

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
