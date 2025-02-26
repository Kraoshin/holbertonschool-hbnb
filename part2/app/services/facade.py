from app.persistence.repository import InMemoryRepository
from app.models.place import Place
from app.models.user import User
from app.models.review import Review


class HBnBFacade:
    def __init__(self):
        self.user_repo = InMemoryRepository()
        self.place_repo = InMemoryRepository()
        self.review_repo = InMemoryRepository()
        self.amenity_repo = InMemoryRepository()

    #Place facade
    def create_place(self, place_data):
        """the function crrate a new place with the data we provided"""
        new_place = Place(**place_data)
        self.place_repo.add(new_place)
        return new_place

    def get_place(self, place_id):
        """The function get a place with place_id"""
        place = self.place_repo.get(place_id)
        if not place:
            raise ValueError("Place not found")
        return place

    def get_all_places(self):
        """The function get all places in the repo"""
        return self.place_repo.get_all()

    def update_place(self, place_id, place_data):
        """the function will update a place with new data"""
        place = self.place_repo.get(place_id)
        if not place:
            raise ValueError("Place not found")
        
        for keys, value in place_data.items():
            if hasattr(place, keys):
                setattr(place, keys, value)
        
        self.place_repo.update(place_id, place.__dict__)
        return place

    #User facade
    def create_user(self, user_data):
        user = User(**user_data)
        self.user_repo.add(user)
        return user

    def get_user(self, user_id):
        return self.user_repo.get(user_id)

    def get_user_by_email(self, email):
        return self.user_repo.get_by_attribute('email', email)

    def get_all_users(self):
        return self.user_repo.get_all()  # To be used in the UserList endpoint

    def update_user(self, user_id, user_data):
        user = self.user_repo.get(user_id)
        if not user:
            return None
        for key, value in user_data.items():
            if hasattr(user, key):
                setattr(user, key, value)   
        return user  # Return the updated user

    #Review facade
    def create_review(self, review_data):
        review = Review(**review_data)
        self.review_repo.add(review)
        return review

    def get_review(self, review_id):
        review = self.review_repo.get(review_id)
        if not review:
            raise ValueError("Review not found, please enter a valid review title")
        return review

    def get_all_reviews(self):
        return self.review_repo.get_all()

    def get_reviews_by_place(self, place_id):
        place = self.place_repo.get(place_id)
        if not place:
            return "Place not found, please enter a valid place"
        return [review for review in self.review_repo.get_all() if review.place_id == place_id]

    def update_review(self, review_id, review_update):
        review = self.review_repo.get(review_id)
        if not review:
            return ("Review not found, please enter a valid review title")
        
        for key, value in review_update.items():
            if hasattr(review, key):
                setattr(review, key, value)
        self.review_repo.update(review_id, review.__dict__)
        return review

    def delete_review(self, review_id):
        review = self.review_repo.get(review_id)
        if not review:
            return ("Review not found, please enter a valid review title")
        self.review_repo.delete(review_id)
        return {'message': 'Review deleted successfully'}
