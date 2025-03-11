from app.persistence.repository import InMemoryRepository
from app.models.user import User
from app.models.place import Place
from app.models.amenity import Amenity
from app.models.review import Review
from app.persistence.repository import UserRepository
from app.persistence.repository import PlaceRepository
from app.persistence.repository import ReviewRepository
from app.persistence.repository import AmenityRepository
from app import db, bcrypt


class HBnBFacade:
    def __init__(self):
        self.user_repo = UserRepository()
        self.place_repo = PlaceRepository()
        self.review_repo = ReviewRepository()
        self.amenity_repo = AmenityRepository()

    """Place facade"""
    def validate_place_data(self, place_data):
        # Ensure that data received is valid

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

        self.validate_place_data(place_data)  # Validate data before creating
        place = Place(**place_data)
        self.place_repo.add(place)
        return place

    def get_place(self, place_id):
        place = self.place_repo.get(place_id)
        if place:
            return place
        raise ValueError("Place not found")

    def get_all_places(self):
        return self.place_repo.get_all()

    def update_place(self, place_id, place_data):
        self.validate_place_data(place_data)  # Validate data before updating
        place = self.get_place(place_id)
        if place:
            if place.owner =! self.get_user(place_data['owner_id']):
                raise ValueError("Owner cannot be changed.")
            elif place.owner = self.get_user(place_data['owner_id']):
                self.place_repo.update(place_id, place_data)
                return place
        raise ValueError("Place not found")

    """User facade"""

    def create_user(self, user_data):
        user = User(**user_data)
        user.hash_password(user_data['password'])
        self.user_repo.add(user)
        return user

    def get_user(self, user_id):
        return self.user_repo.get(user_id)

    def get_user_by_email(self, email):
        return self.user_repo.get_by_email('email', email)

    def get_all_users(self):
        return self.user_repo.get_all()

    def update_user(self, user_id, user_data):
        user = self.user_repo.get(user_id)
        if user:
            user_data['password'] = bcrypt.generate_password_hash(user_data['password']).decode('utf-8')
            self.user_repo.update(user_id, user_data)
            return user
        raise ValueError("User not found")

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
        review = self.review_repo.get(review_id)
        if not review:
            raise ValueError("Review not found")
        self.review_repo.update(review_id, review_data)
        return self.get_review(review_id
        
    def delete_review(self, review_id):
        review = self.review_repo.get(review_id)
        if not review:
            raise ValueError("Review not found")
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
    
    def add_amenity_to_place(self, place_id, amenity_id):
        place = self.get_place(place_id)
        if not place:
            raise ValueError("Place not found")

        amenity = self.get_amenity(amenity_id)
        if not amenity:
            raise ValueError("Amenity not found")

        place.add_amenity(amenity)
        db.session.commit()
        
        return place

    def remove_amenity_from_place(self, place_id, amenity_id):
        place = self.get_place(place_id)
        if not place:
            raise ValueError("Place not found")

        amenity = self.get_amenity(amenity_id)
        if not amenity:
            raise ValueError("Amenity not found")

        place.remove_amenity(amenity)
        db.session.commit()
        return place

    def update_amenity(self, amenity_id, amenity_data):
        """Update an amenity by ID"""
        amenity = self.get_amenity(amenity_id)

        if not amenity:
            return {"error": "Amenity not found"}, 404

        self.amenity_repo.update(amenity_id, amenity_data)
        return amenity
