from models import db, Place, Review, Amenity

class PlaceRepository:
    @staticmethod
    def create(place):
        db.session.add(place)
        db.session.commit()

    @staticmethod
    def get_all():
        return Place.query.all()
    
    @staticmethod
    def get_by_id(place_id):
        return Place.query.get(place_id)
    
    @staticmethod
    def update(place):
        db.session.commit()
    
    @staticmethod
    def delete(place):
        db.session.delete(place)
        db.session.commit()

class ReviewRepository:
    
    @staticmethod
    def create(review):
        db.session.add(review)
        db.session.commit()

    @staticmethod
    def get_all():
        return Review.query.all()
    
    @staticmethod
    def get_by_id(review_id):
        return Review.query.get(review_id)
    
    @staticmethod
    def update(review):
        db.session.commit()
    
    @staticmethod
    def delete(review):
        db.session.delete(review)
        db.session.commit()
