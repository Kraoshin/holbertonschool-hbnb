from .basemodel import BaseModel
from app.models.place import Place
from app.models.user import User
from app import db
from sqlalchemy.orm import relationship


class Review(BaseModel):
     __tablename__ = 'reviews'
