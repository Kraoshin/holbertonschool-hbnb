from .basemodel import BaseModel
from app import db
from app.models.place_amenity import place_amenity

class Amenity(BaseModel):
    __tablename__ = 'amenities'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(1024), nullable=False)
