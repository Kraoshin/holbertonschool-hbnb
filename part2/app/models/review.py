from .basemodel import BaseModel
from app.models.place import Place
from app.models.user import User


class Review(BaseModel):
    def __init__(self, text, rating, place_id, user_id):
        super().__init__()
        self.text = text
        self.rating = rating
        self.place_id = place_id
        self.user_id = user_id

    def exceptions (self):
        if not self.text:
            raise ValueError("You must provide a text for the review")
        if not (1 <= self.rating <= 5):
            raise ValueError("The rating must be between 1 and 5")
        if not isinstance(self.place, Place):
            raise ValueError("Places not found, please enter a valid place")
        if not isinstance(self.user, User):
            raise ValueError("User not found, please enter a valid username")
