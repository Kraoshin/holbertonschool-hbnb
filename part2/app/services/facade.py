from app.persistence.repository import InMemoryRepository
from app.models.review import Review

class HBnBFacade:
    def __init__(self):
        self.user_repo = InMemoryRepository()
        self.place_repo = InMemoryRepository()
        self.review_repo = InMemoryRepository()
        self.amenity_repo = InMemoryRepository()

    # Placeholder method for creating a user
    def create_user(self, user_data):
        # Logic will be implemented in later tasks
        pass

    # Placeholder method for fetching a place by ID
    def get_place(self, place_id):
        # Logic will be implemented in later tasks
        pass

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
        return [review for review in self.review_repo.get_all() if review.place == place_id]
    
    def update_review(self, review_id, review_update):
        review = self.review_repo.get(review_id)
        if not review:
            return("Review not found, please enter a valid review title")
        for key, value in review_update.items():
            if hasattr(review, key):
                setattr(review, key, value)
        self.review_repo.update(review_id, review.__dict__)
        return review

    def delete_review(self, review_id):
        review = self.review_repo.get(review_id)
        if not review:
            return("Review not found, please enter a valid review title")
        self.review_repo.delete(review_id)
        return {'message': 'Review deleted successfully'}
        