from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from app.services import facade


api = Namespace('amenities', description='Amenity operations')

# Define the amenity model for input validation
amenity_model = api.model('Amenity', {
    'name': fields.String(required=True, description='Name of the amenity')
})


@api.route('/')
class AmenityList(Resource):
    @api.expect(amenity_model)
    @api.response(201, 'Amenity successfully created')
    @api.response(400, 'Invalid input data')
    def post(self):
        """Create a new amenity"""
        amenity_data = api.payload
        existing_amenity = facade.get_amenity_by_name(amenity_data['name'])
        if existing_amenity:
            api.abort(400, 'Amenity already registered')
        try:
            new_amenity = facade.create_amenity(amenity_data)
            return {'id': new_amenity.id, 'name': new_amenity.name}, 201
        except ValueError as error:
            return {'error': str(error)}, 400

    @api.response(200, 'List of amenities retrieved successfully')
    def get(self):
        """Retrieve a list of all amenities"""
        amenities = facade.get_all_amenities()
        return [{'id': amenity.id, 'name': amenity.name}
                for amenity in amenities], 200

    @api.route('/<amenity_id>')
    class AmenityResource(Resource):
        @api.response(200, 'Amenity details retrieved successfully')
        @api.response(404, 'Amenity not found')
        def get(self, amenity_id):
            """Get amenity details by ID"""
            amenity = facade.get_amenity(amenity_id)
            if not amenity:
                return {'error': 'Amenity not found'}, 404
            return {'id': amenity.id, 'name': amenity.name}, 200

        @api.expect(amenity_model, validate=True)
        @api.response(200, 'Amenity updated successfully')
        @api.response(404, 'Amenity not found')
        @api.response(400, 'Invalid input data')
        def put(self, amenity_id):
            """Update an amenity's information"""
            amenity_data = api.payload
            amenity = facade.get_amenity(amenity_id)

            if not amenity:
                api.abort(404, "Amenity not found")
            
            existing_amenity = facade.get_amenity_by_name(amenity_data['name'])
            if existing_amenity and existing_amenity.id != amenity.id:
                api.abort(400, "Amenity name already exists")

            try:
                amenity = facade.update_amenity(amenity_id, amenity_data)
                return {'id': amenity.id,
                        'name': amenity.name}, 200
            except (ValueError, TypeError) as e:
                api.abort(400, str(e))
            
