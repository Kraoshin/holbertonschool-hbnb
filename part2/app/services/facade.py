from app.persistence.repository import InMemoryRepository
from app.models.place import Place

class HBnBFacade:
    def __init__(self):
        self.user_repo = InMemoryRepository()
        self.place_repo = InMemoryRepository()
        self.review_repo = InMemoryRepository()
        self.amenity_repo = InMemoryRepository()

    #Place facade

    def create_place(self, place_data):
        # the function crrate a new place with the data we provided
        new_place = Place(**place_data)
        self.place_repo.add(new_place)
        return new_place

    def get_place(self, place_id):
        # The function get a place with place_id
        place = self.place_repo.get(place_id)
        if not place:
            raise ValueError("Place not found")
        return place

    def get_all_places(self):
        # The function get all places in the repo
        return self.place_repo.get_all()

    def update_place(self, place_id, place_data):
        # the function will update a place with new data
        place = self.place_repo.get(place_id)
        if not place:
            raise ValueError("Place not found")
        
        for keys, value in place_data.items():
            if hasattr(place, keys):
                setattr(place, keys, value)
        
        self.place_repo.update(place_id, place.__dict__)
        return place