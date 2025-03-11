from app.models.base_model import BaseModel
from app import db
import uuid
from sqlalchemy.orm import relationship
from app.models.place_amenity import place_amenity


class Amenity(BaseModel):
    """Represents an amenity in the hbnb app."""

    __tablename__ = 'amenities'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(1024), nullable=False)
