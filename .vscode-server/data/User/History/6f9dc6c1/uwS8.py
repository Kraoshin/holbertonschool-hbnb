from flask_restx import Namespace, Resource, fields
from app.services import facade
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt

api = Namespace('places', description='Place operations')


# Define the place model for input validation and documentation
place_model = api.model('Place', {
    'title': fields.String(required=True,
                           description='Title of the place'),
    'description': fields.String(description='Description of the place'),
    'price': fields.Float(required=True,
                          description='Price per night'),
    'latitude': fields.Float(required=True,
                             description='Latitude of the place'),
    'longitude': fields.Float(required=True,
                              description='Longitude of the place'),
    'owner_id': fields.String(required=True,
                              description='ID of the owner'),
    'amenities': fields.List(fields.String, required=True,
                             description="List of amenities ID's"),
})


@api.route('/')
class PlaceList(Resource):
    @jwt_required()
    @api.doc(security='token')
    @api.expect(place_model)
    @api.response(201, 'Place successfully created')
    @api.response(400, 'Invalid input data')
    def post(self):
        """Register a new place"""
        cur_user = get_jwt_identity()
        data_place = api.payload
        data['owner_id'] = cur_user['id']
        data_place['owner_id'] = cur_user['id']
        try:
            new_place = facade.create_place(data_place)
            return {
                "id": new_place.id,
                "title": new_place.title,
                "description": new_place.description,
                "price": new_place.price,
                "latitude": new_place.latitude,
                "longitude": new_place.longitude,
                "owner_id": new_place.owner_id
            }, 201
        except ValueError as e:
            return {'error': str(e)}, 400

    @api.response(200, 'List of places retrieved successfully')
    def get(self):
        """Retrieve a list of all places"""
        places = facade.get_all_places()
        return [
            {
                "id": all_place.id,
                "title": all_place.title,
                "description": all_place.description,
                "price": all_place.price,
                "latitude": all_place.latitude,
                "longitude": all_place.longitude,
                "owner_id": all_place.owner_id,
            } for all_place in places
        ]


@api.route('/<place_id>')
class PlaceResource(Resource):
    @api.response(200, 'Place details retrieved successfully')
    @api.response(404, 'Place not found')
    def get(self, place_id):
        """Get place details by ID"""
        try:
            data_place = facade.get_place(place_id)
            return {
                "id": data_place.id,
                "title": data_place.title,
                "description": data_place.description,
                "price": data_place.price,
                "latitude": data_place.latitude,
                "longitude": data_place.longitude,
                "owner_id": data_place.owner_id
            }, 200
        except ValueError as error:
            return {"error": str(error)}, 404

    @api.expect(place_model)
    @api.response(200, 'Place updated successfully')
    @api.response(404, 'Place not found')
    @api.response(400, 'Invalid input data')
    @jwt_required()
    @api.doc(security='token')
    def put(self, place_id):
        """Update a place's information"""
        cur_user = get_jwt_identity()
        place = facade.get_place(place_id)
        if not place:
            return {'message': 'Invalid input data'}, 400
        if place.owner_id != cur_user['id']:
            return {'error': 'Unauthorized action'}, 403
        try:

            place_data = api.payload
            place_data['owner_id'] = place.owner_id
            updated_place = facade.update_place(place_id, place_data)
            if updated_place:
                return {
                    "message": "Place updated successfully"
                }, 200


            return {'error': 'Place not found'}, 404

        except ValueError as e:
            return {'error': str(e)}, 400

@api.route('/places/<place_id>')
class AdminPlaceModify(Resource):
    @jwt_required()
    def put(self, place_id):
        current_user = get_jwt_identity()

        # Set is_admin default to False if not exists
        is_admin = current_user.get('is_admin', False)
        user_id = current_user.get('id')

        place = facade.get_place(place_id)
        if not is_admin and place.owner_id != user_id:
            return {'error': 'Unauthorized action'}, 403

        updated_place = facade.update_place(place_id, place)
        if not updated_place:
            return {'message': 'Place not found'}, 404
        
        return {
            "title": updated_place.title,
            "description": updated_place.description,
            "price": updated_place.price,
            "latitude": updated_place.latitude,
            "longitude": updated_place.longitude,
            "owner_id": updated_place.owner_id
            }, 200

@api.route('/<place_id>/ameneties/<amenity_id>')
class PlaceAmenity(Resource):
    @api.response(200, 'Amenity added to place successfully')
    @api.response(404, 'Place or amenity not found')
    @jwt_required()
    @api.doc(security='token')
    def post(self, place_id, amenity_id):
        """Add an amenity to a place"""
        cur_user = get_jwt_identity()
        place = facade.get_place(place_id)
        amenity = facade.get_amenity(amenity_id)

        if not place:
            return {'error': 'Place not found'}, 404
        
        if not amenity:
            return {'error': 'Amenity not found'}, 404
        
        if not cur_user.get('is_admin'):
            if place.owner_id != cur_user['id']:
                return {'error': 'Unauthorized action'}, 403
            
        try:
            facade.add_amenity_to_place(place_id, amenity_id)
            return {
                "message": "Amenity added to place successfully"
            }, 200

        except ValueError as e:
            return {'error': str(e)}, 404

    @api.response(200, 'Amenity deleted to place successfully')
    @api.response(404, 'Place or amenity not found')
    @jwt_required()
    @api.doc(security='token')
    def delete(self, place_id, amenity_id):
        """Remove an amenity from a place"""
        cur_user = get_jwt_identity()
        place = facade.get_place(place_id)
        amenity = facade.get_amenity(amenity_id)

        if not place:
            return {'error': 'Place not found'}, 404
        
        if not amenity:
            return {'error': 'Amenity not found'}, 404
        
        if not cur_user.get('is_admin'):
            if place.owner_id != cur_user['id']:
                return {'error': 'Unauthorized action'}, 403

        try:
            facade.remove_amenity_from_place(place_id, amenity_id)
            return {
                "message": "Amenity removed from place successfully"
            }, 200

        except ValueError as e:
            return {'error': str(e)}, 404


@api.route('/<place_id>/reviews')
class PlaceReviewList(Resource):
    @api.response(200, 'List of reviews for the place retrieved successfully')
    @api.response(404, 'Place not found')
    def get(self, place_id):
        """Get all reviews for a specific place"""
        place = facade.get_place(place_id)
        reviews = facade.get_reviews_by_place(place_id)

        if not place:
            return {'message': 'Place not found'}, 404
        
        if not reviews:
            return {'message': 'Reviews not found'}, 404

        return [{
            'id': review.id,
            'text': review.text,
            'rating': review.rating
        } for review in reviews], 200
