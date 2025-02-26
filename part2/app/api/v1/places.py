from flask_restx import Namespace, Resource, fields
from app.services import facade

api = Namespace('places', description='Place operations')

# Define the place model for input validation and documentation
place_model = api.model('Place', {
    'title': fields.String(required=True, description='Title of the place'),
    'description': fields.String(description='Description of the place'),
    'price': fields.Float(required=True, description='Price per night'),
    'latitude': fields.Float(required=True, description='Latitude of the place'),
    'longitude': fields.Float(required=True, description='Longitude of the place'),
    'owner_id': fields.String(required=True, description='ID of the owner'),
    'amenities': fields.List(fields.String, required=True, description="List of amenities ID's")
})

@api.route('/')
class PlaceList(Resource):
    @api.expect(place_model)
    @api.response(201, 'Place successfully created')
    @api.response(400, 'Invalid input data')
    def post(self):
        """Register a new place"""
        data_place = api.payload
        try:
            new_place = facade.create_place(data_place)
            return {
                "id": new_place.id,
                "title": new_place.title,
                "description": new_place.description,
                "price": new_place.price,
                "latitude": new_place.latitude,
                "longitude": new_place.longitude,
                "owner": new_place.owner,
            }, 201
        except ValueError as error:
            return {"error": str(error)}, 400

    @api.response(200, 'List of places retrieved successfully')
    def get(self):
        """Retrieve a list of all places"""
        places = facade.get_all_places()
        return [
            {
                "id": all_place.id,
                "title": all_place.title,
                "latitude": all_place.latitude,
                "longitude": all_place.longitude
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
                "owner": data_place.owner,
            }, 200
        except ValueError as error:
            return {"error": str(error)}, 404

    @api.expect(place_model)
    @api.response(200, 'Place updated successfully')
    @api.response(404, 'Place not found')
    @api.response(400, 'Invalid input data')
    def put(self, place_id):
        """Update a place's information"""
        data_place = api.payload
        try:
            place_up = facade.update_place(place_id, data_place)
            if not place_up:
                return {"error": "Place not found"}, 404
            return {
                "title": place_up.title,
                "description": place_up.description,
                "price": place_up.price,
            }, 200
        except ValueError as error:
            return {"error": str(error)}, 400