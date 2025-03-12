from app.models.place import Place
from app.models.user import User
from app.models.review import Review
from app.models.amenity import Amenity
from app.persistence.repository import UserRepository
from app.persistence.repository import PlaceRepository
from app.persistence.repository import ReviewRepository
from app.persistence.repository import AmenityRepository
from app import bcrypt, db


class HBnBFacade:
    def __init__(self):
        self.user_repo = UserRepository()
        self.place_repo = PlaceRepository()
        self.review_repo = ReviewRepository()
        self.amenity_repo = AmenityRepository()

    """Place facade"""
    def validate_place_data(self, place_data):

        if 'price' in place_data:
            if place_data['price'] < 0:
                raise ValueError("Price must be a non-negative float.")

        if 'latitude' in place_data:
            if not (-90.0 <= place_data['latitude'] <= 90.0):
                raise ValueError("Latitude must be between -90.0 and 90.0")

        if 'longitude' in place_data:
            if not (-180.0 <= place_data['longitude'] <= 180.0):
                raise ValueError("Longitude must be between -180.0 and 180.0")

        if not self.user_repo.get(place_data['owner_id']):
            raise ValueError("Invalid owner_id. User does not exist.")

    def create_place(self, place_data):

        self.validate_place_data(place_data)
        place = Place(**place_data)
        self.place_repo.add(place)
        return place

    def get_place(self, place_id):
        place = self.place_repo.get(place_id)
        if place:
            return place
        return {"error": "Place not found"}, 404

    def get_all_places(self):
        return self.place_repo.get_all()

    def update_place(self, place_id, place_data):
        self.validate_place_data(place_data)
        place = self.get_place(place_id)
        if place:
            place.owner = self.get_user(place_data['owner_id'])
            self.place_repo.update(place_id, place_data)
            return place
        return {"error": "Place not found"}, 404

    """User facade"""
    def create_user(self, user_data):
        user = User(**user_data)
        user.hash_password(user_data['password'])
        self.user_repo.add(user)
        return user

    def get_user(self, user_id):
        return self.user_repo.get(user_id)

    def get_user_by_email(self, email):
        return self.user_repo.get_by_attribute('email', email)

    def get_all_users(self):
        return self.user_repo.get_all()

    def update_user(self, user_id, user_data):
        user = self.user_repo.get(user_id)
        if user:
            user_data['password'] = bcrypt.generate_password_hash(user_data['password']).decode('utf-8')
            self.user_repo.update(user_id, user_data)
            return user
        return {"error": "User not found"}, 404

    """Review facade"""
    def create_review(self, review_data):
        review = Review(**review_data)
        self.review_repo.add(review)
        return review

    def get_review(self, review_id):
        review = self.review_repo.get(review_id)
        if not review:
            raise ValueError(
                "Review not found, please enter a valid review title")
        return review

    def get_all_reviews(self):
        return self.review_repo.get_all()

    def get_reviews_by_place(self, place_id):
        place = self.place_repo.get(place_id)
        if not place:
            raise ValueError("Place not found, please enter a valid place")
        return [review for review in self.review_repo.get_all()
                if review._place_id == place_id]

    def update_review(self, review_id, review_update):
        user = self.get_user(review_update['user_id'])
        if not user:
            raise KeyError("User not found")
        place = self.get_place(review_update['place_id'])
        if not place:
            raise KeyError("Place not found")
        
        review = self.review_repo.get(review_id)
        if not review:
            raise KeyError("Review not found, please enter "
                            "a valid review title")
        if ('text' in review_update and len(review_update['text']) > 1000) \
                or not review_update['text']:
            raise ValueError("Text must be less than 1000 characters")

        if 'rating' in review_update and not \
                (1 <= review_update['rating'] <= 5):
            raise ValueError("Rating must be between 1 and 5")
        
        if not isinstance(user, User):
            raise ValueError("User not found, please enter a valid user")
        
        if not isinstance(place, Place):
            raise ValueError("Place not found, please enter a valid place")

        for key, value in review_update.items():
            if hasattr(review, key):
                setattr(review, key, value)
        self.review_repo.update(review_id, review.__dict__)
        return review

    def delete_review(self, review_id):
        review = self.review_repo.get(review_id)
        if not review:
            return {'message': 'Review not found'}, 404
        self.review_repo.delete(review_id)
        return {'message': 'Review deleted successfully'}

    """Amenity Facades"""
    def create_amenity(self, amenity_data):
        """Create a new amenity"""
        amenity = Amenity(**amenity_data)
        self.amenity_repo.add(amenity)
        return amenity

    def get_amenity(self, amenity_id):
        """Retrieve an amenity by ID"""
        return self.amenity_repo.get(amenity_id)

    def get_all_amenities(self):
        """Retrieve all amenities"""
        return self.amenity_repo.get_all()
    
    def remove_amenity_from_place(self, place_id, amenity_id):
        place = self.get_place(place_id)
        if not place:
            return {"error": "Place not found"}, 404

        amenity = self.get_amenity(amenity_id)
        if not amenity:
            return {"error": "Amenity not found"}, 404

        place.remove_amenity(amenity)
        db.session.commit()
        return place

    def update_amenity(self, amenity_id, amenity_data):
        """Update an amenity."""
        amenity = self.get_amenity(amenity_id)

        if not amenity:
            return {"error": "Amenity not found"}, 404

        self.amenity_repo.update(amenity_id, amenity_data)
        return amenity
