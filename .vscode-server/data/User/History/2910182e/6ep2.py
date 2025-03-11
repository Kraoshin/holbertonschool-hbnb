from app.models.basemodel import BaseModel
from app import db
import uuid
from sqlalchemy.orm import relationship
from app.models.place_amenity import place_amenity


class Amenity(BaseModel):
    """Represents an amenity in the hbnb app."""

    __tablename__ = 'amenities'

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = db.Column(db.String(1024), nullable=False)
