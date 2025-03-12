from app.models.place import Place
from app.models.user import User
from app.models.review import Review
from app.models.amenity import Amenity
from app.persistence.repository import UserRepository
from app.persistence.repository import PlaceRepository
from app.persistence.repository import ReviewRepository
from app.persistence.repository import AmenityRepository
from app import bcrypt


class HBnBFacade:
    def __init__(self):
        self.user_repo = UserRepository()
        self.place_repo = PlaceRepository()
        self.review_repo = ReviewRepository()
        self.amenity_repo = AmenityRepository()

    """Place facade"""
    def create_place(self, place_data):
        """the function crrate a new place with the data we provided"""
        Owner = self.get_user(place_data['owner_id'])
        if not Owner:
            raise ValueError("Owner not found")

        new_place = Place(
            title=place_data['title'],
            description=place_data['description'],
            price=place_data['price'],
            latitude=place_data['latitude'],
            longitude=place_data['longitude'],
            owner_id=Owner.id
        )
        if 'amenities' in place_data:
            for amenity_id in place_data['amenities']:
                amenity = self.amenity_repo.get(amenity_id)
                if not amenity:
                    raise ValueError("Amenity not found")
                new_place.add_amenity(amenity)
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
            raise KeyError("Place not found")

        if 'title' in place_data and len(place_data['title']) > 100 \
                or not place_data['title']:
            raise ValueError("Title is required with max 100 characters.")

        if 'description' in place_data and \
                len(place_data['description']) > 1000:
            raise ValueError("Description must be less than 1000 characters.")

        if ('price' in place_data and place_data['price'] <= 0):
            raise ValueError("Price must be greater than 0.")

        if 'latitude' in place_data and \
                not (90 >= place_data['latitude'] >= -90):
            raise ValueError("Latitude must be between 90 and -90.")

        if 'longitude' in place_data and \
                not (180 >= place_data['longitude'] >= -180):
            raise ValueError("Longitude must be between 180 and -180.")

        if 'owner_id' in place_data and \
                not self.user_repo.get(place_data['owner_id']):
            raise ValueError("Owner not found, please enter a valid owner")
        
        if 'amenities' in place_data:
            for amenity_id in place_data['amenities']:
                amenity = self.amenity_repo.get(amenity_id)
                if not amenity:
                    raise ValueError("Amenity not found")
                place.add_amenity(amenity)

        for keys, value in place_data.items():
            if hasattr(place, keys):
                setattr(place, keys, value)

        self.place_repo.update(place_id, place.__dict__)
        return place

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
        raise ValueError("User not found")

    """Review facade"""
    def create_review(self, review_data):
        user = self.get_user(review_data['user_id'])
        if not user:
            raise ValueError("User not found")

        place = self.get_place(review_data['place_id'])
        if not place:
            raise ValueError("Place not found")

        review = Review(
            text=review_data['text'],
            rating=review_data['rating'],
            user_id=user.id,
            place_id=place.id
        )
        review.add_review(place.id)
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

    def update_amenity(self, amenity_id, amenity_data):
        """Update an amenity by ID"""
        amenity = self.get_amenity(amenity_id)
        if not amenity:
            raise KeyError("Amenity not found")
        if not amenity_data['name'] or len(amenity_data['name']) > 50:
            raise ValueError("Name must be a required with a maximum of "
                            "50 characters")

        for key, value in amenity_data.items():
            if hasattr(amenity, key):
                setattr(amenity, key, value)

                self.amenity_repo.update(amenity_id, amenity.__dict__)

                return amenity
