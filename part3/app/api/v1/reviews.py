from flask_restx import Namespace, Resource, fields
from app.services import facade
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt

api = Namespace('reviews', description='Review operations')


# Define the review model for input validation and documentation
review_model = api.model('Review', {
    'text': fields.String(required=True, description='Text of the review'),
    'rating': fields.Integer(required=True,
                             description='Rating of the place (1-5)'),
    'user_id': fields.String(required=True, description='ID of the user'),
    'place_id': fields.String(required=True, description='ID of the place')
})


@api.route('/')
class ReviewList(Resource):
    @api.expect(review_model)
    @api.response(201, 'Review successfully created')
    @api.response(400, 'Invalid input data')
    @jwt_required()
    def post(self):
        """Register a new review"""
        cur_user = get_jwt_identity()
        review_data = api.payload
        if ('text' not in review_data or 'rating' not in review_data or
                'user_id' not in review_data or 'place_id' not in review_data):
            return {'message': 'Missing required fields'}, 400
        try:
            new_review = facade.create_review(review_data)
            return {
                    'id': new_review.id,
                    'text': new_review.text,
                    'rating': new_review.rating,
                    'user_id': new_review._user_id,
                    'place_id': new_review._place_id
                }, 201
        except ValueError as error:
            return {'error': str(error)}, 400

    @api.response(200, 'List of reviews retrieved successfully')
    def get(self):
        """Retrieve a list of all reviews"""
        reviews = facade.get_all_reviews()
        return [
            {
                'id': review.id,
                'text': review.text,
                'rating': review.rating,
                'user_id': review._user_id,
                'place_id': review._place_id
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
            print("Review retrieved:", review)
            return {
                'id': review.id,
                'text': review.text,
                'rating': review.rating,
                'user_id': review._user_id,
                'place_id': review._place_id
            }, 200
        except ValueError as error:
            return {'error': str(error)}, 400

    @api.expect(review_model)
    @api.response(200, 'Review updated successfully')
    @api.response(404, 'Review not found')
    @api.response(400, 'Invalid input data')
    @jwt_required()
    def put(self, review_id):
        """Update a review's information"""
        cur_user = get_jwt_identity()
        review = facade.get_review(review_id)
        if not review:
            return {'error': 'Review not found'}, 404
        if review.user_id != cur_user['id']:
            return {'error': 'Unauthorized action'}, 403
        review_update = api.payload
        try:
            updated_review = facade.update_review(review_id, review_update)
            return {
                'id': updated_review.id,
                'text': updated_review.text,
                'rating': updated_review.rating,
                'user_id': updated_review._user_id,
                'place_id': updated_review._place_id
            }, 200
        except ValueError as error:
            return {'error': str(error)}, 400
        

    @api.response(200, 'Review deleted successfully')
    @api.response(404, 'Review not found')
    @jwt_required()
    def delete(self, review_id):
        """Delete a review"""
        cur_user = get_jwt_identity()
        review = facade.get_review(review_id)
        if review.user_id != cur_user['id']:
            return {'error': 'Unauthorized action'}, 403
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
        try:
            place_reviews = facade.get_reviews_by_place(place_id)
            return [
                {
                    'text': review.text,
                    'id': review.id,
                    'rating': review.rating
                } for review in place_reviews
            ], 200
        except ValueError as error:
            return {'error': str(error)}, 404
