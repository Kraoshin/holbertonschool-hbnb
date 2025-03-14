from flask_restx import Namespace, Resource, fields
from app.services import facade
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db

api = Namespace('reviews', description='Review operations')


user_model = api.model('PlaceUser', {
    'id': fields.String(description='User ID'),
    'first_name': fields.String(description='First name of the owner'),
    'last_name': fields.String(description='Last name of the owner'),
    'email': fields.String(description='Email of the owner')
})

review_model = api.model('Review', {
    'text': fields.String(required=True, description='Text of the review', example="Super cool!"),
    'rating': fields.Integer(required=True, description='Rating of the place (1-5)', example=5),
    'place_id': fields.String(required=True, description='ID of the place', example="a6e9d55e-c8d1-4268-bb65-4c19a5206a08")
})

review_update_model = api.model('Review Update', {
    'text': fields.String(description='Text of the review', example="Pablo is the best thank you"),
    'rating': fields.Integer(description='Rating of the place (1-5)', example=5),
})

place_model = api.model('Place', {
    'title': fields.String(required=True, description='Title of the place', example="Cozy Apartment"),
    'description': fields.String(description='Description of the place', example="A nice place to stay"),
    'price': fields.Float(required=True, description='Price per night', example=100.0),
    'latitude': fields.Float(required=True, description='Latitude of the place', example=37.7749),
    'longitude': fields.Float(required=True, description='Longitude of the place', example=-122.4194),
    'owner_id': fields.String(required=True, description='Owner of the place', example="3fa85f64-5717-4562-b3fc-2c963f66afa6"),
    'amenities': fields.List(fields.String, description="List of amenities ID's", example=["1fa85f64-5717-4562-b3fc-2c963f66afa6"]),
})


@api.route('/')
class ReviewList(Resource):
    @api.expect(review_model)
    @api.response(201, 'Review successfully created')
    @api.response(400, 'Invalid input data')
    @api.response(403, 'Unauthorized action')
    @jwt_required()
    @api.doc(security="token")
    def post(self):
        """Register a new review"""
        current_user = get_jwt_identity()
        user = facade.get_user(current_user)
        review_data = api.payload
        place = facade.get_place(review_data.get("place_id"))
        
        if not place:
            api.abort(400, "Invalid place")
        
        if not user or user.id == place.owner_id:
            api.abort(403, "Unauthorized action")
        
        review_data["user_id"] = user.id

        place_reviews = facade.get_reviews_by_place(place.id)
        if any(review.user_id == user.id for review in place_reviews):
            api.abort(400, "You already reviewed this place")
        
        review_data["place_id"] = place.id

        try:
            new_review = facade.create_review(review_data)
        except (ValueError, TypeError) as e:
            api.abort(400, str(e))

        return {'id': new_review.id,
                'place_id': new_review.place_id,
                'rating': new_review.rating,
                'text': new_review.text,
                'user_id': new_review.user_id
                }, 201

    @api.response(200, 'List of reviews retrieved successfully')
    def get(self):
        """Retrieve a list of all reviews"""
        reviews = facade.get_all_reviews()
        return [
            {
                'id': review.id,
                'text': review.text,
                'rating': review.rating,
                'user_id': review.user_id,
                'place_id': review.place_id
            } for review in reviews
        ], 200


@api.route('/<review_id>')
class ReviewResource(Resource):
    @api.response(200, 'Review details retrieved successfully')
    @api.response(404, 'Review not found')
    def get(self, review_id):
        """Get review details by ID"""

        try:
            review = facade.get_review(review_id)
            if not review:
                return {'error': 'Review not found'}, 404
            
            return {
                'id': review.id,
                'text': review.text,
                'rating': review.rating,
                'user_id': review.user_id,
                'place_id': review.place_id
            }, 200
        except ValueError as error:
            return {'error': str(error)}, 400

    @api.expect(review_update_model)
    @api.response(200, 'Review updated successfully')
    @api.response(404, 'Review not found')
    @api.response(400, 'Invalid input data')
    @jwt_required()
    @api.doc(security="token")

    def put(self, review_id):
        """Update a review's information"""

        cur_user = get_jwt_identity()
        user = facade.get_user(current_user)
        review = facade.get_review(review_id)

        if not review:
            return {'error': 'Review not found'}, 404
        
        if not user or user.id != review.user_id:
            api.abort(403,'Unauthorized action')
        
        review_data = api.payload
        valid_inputs = ["rating", "text"]
        for input in valid_inputs:
            if input not in review_data:
                api.abort(400, "Invalid input data")

        try:
            review.update(review_data)
            facade.update_review(review_id, review_data)
        
        except (ValueError, TypeError) as e:
            api.abort(400, str(e))

        return {
                'id': review_data.id,
                'text': review_data.text,
                'rating': review_data.rating,
                'user_id': review_data.user_id,
                'place_id': review_data.place_id
            }, 200 

    @api.response(200, 'Review deleted successfully')
    @api.response(404, 'Review not found')
    @api.response(403, 'Unauthorized action')
    @jwt_required()
    @api.doc(security="token")

    def delete(self, review_id):
        """Delete a review"""

        cur_user = get_jwt_identity()
        user = facade.get_user(current_user)
        review = facade.get_review(review_id)

        if review.user_id != cur_user['id']:
            return {'error': 'Unauthorized action'}, 403
        
        if not user or user.id != review.user_id:
            api.abort(403,'Unauthorized action')
            
        try:
            deleted_review = facade.delete_review(review_id)
            if deleted_review:
                return {'message': 'Review deleted successfully'}, 200

        except ValueError as error:
            return {'error': str(error)}, 404


@api.route('/places/<place_id>/reviews')
class PlaceReviewList(Resource):
    @api.response(200, 'List of reviews for the place retrieved successfully')
    @api.response(404, 'Place not found')
    def get(self, place_id):
        """Get all reviews for a specific place"""

        place = facade.get_place(place_id)

        if not place:
            api.abort(404, 'Place not found')
        
        reviews = facade.get_reviews_by_place(place.id)

        place_reviews = [
            {key: value for key, value in review.to_dict().items() if key not in ["user_id", "place_id"]}
            for review in reviews
        ]

        return place_reviews, 200
