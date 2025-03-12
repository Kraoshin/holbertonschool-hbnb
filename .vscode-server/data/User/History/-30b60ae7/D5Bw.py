from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from app.services import facade


api = Namespace('users', description='User operations')


# Define the user model for input validation and documentation
user_model = api.model('User', {
    'first_name': fields.String(required=True,
                                description='First name of the user'),
    'last_name': fields.String(required=True,
                               description='Last name of the user'),
    'email': fields.String(required=True,
                           description='Email of the user'),
    'password': fields.String(required=True,
                              description='Password of the user')
})


@api.route('/')
class UserList(Resource):
    @api.expect(user_model)
    @api.response(201, 'User successfully created')
    @api.response(400, 'Email already registered')
    @api.response(400, 'Invalid input data')
    def post(self):
        """Register a new user"""

        user_data = api.payload

        existing_user = facade.get_user_by_email(user_data['email'])
        if existing_user:
            return {'error': 'Email already registered'}, 400

        new_user = facade.create_user(user_data)

        return {'id': new_user.id, 'message': 'User successfully created'}, 201

    @api.response(200, 'List of users retrieved successfully')
    def get(self):
        """Get a list of all users"""
        users = facade.user_repo.get_all()
        if not users:
            return {'error': 'No users found'}, 404

        return [{'id': user.id, 'first_name': user.first_name,
                 'last_name': user.last_name, 'email': user.email
                 } for user in users], 200


@api.route('/<user_id>')
class UserResource(Resource):
    @api.response(200, 'user is successfully retrieved')
    @api.response(404, 'the user does not exist')
    def get(self, user_id):
        """get user by his id"""
        user_id = facade.get_user(user_id)
        if not user_id:
            return {'error': 'the user does not exist'}, 404
        return {'id': user_id.id, 'first_name': user_id.first_name,
                'last_name': user_id.last_name, 'email': user_id.email}, 200

    @api.response(200, 'User details updated successfully')
    @api.response(400, 'Invalid input data')
    @api.response(403, 'Unauthorized action')
    @api.response(404, 'User not found')
    @api.expect(user_model)
    @jwt_required()
    @api.doc(security='token')

    def put(self, user_id):
        """Update user details by ID"""

        cur_user = get_jwt_identity()
        user_data = api.payload
        user = facade.get_user(user_id)

        if not user:
            return {"error": "User not found"}, 404
        
        if cur_user.get('is_admin'):
            if 'email' in user_data:
                existing_user = facade.get_user_by_email(user_data['email'])
                if existing_user and existing_user.id != user_id:
                    return {"error": "Email already in use"}, 400
        else:
            if user.id != cur_user['id']:
                return {"error": "Unauthorized action"}, 403
            
        user = facade.update_user(user_id, user_data)

        return {
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email
        }, 200

@api.route('/users/')
class AdminUserCreate(Resource):
    @jwt_required()
    @api.expect(user_model)
    @api.response(201, 'User successfully created')
    @api.response(400, 'Email already registered')
    @api.response(400, 'Invalid input data')
    @api.doc(security='token') 

    def post(self):
        current_user = get_jwt_identity()
        if not current_user.get('is_admin'):
            return {'error': 'Admin privileges required'}, 403

        user_data = api.playload
        email = user_data.get('email')

        # Check if email is already in use
        if facade.get_user_by_email(email):
            return {'error': 'Email already registered'}, 400

        hash_password = User.hash_password(user_data['password'])
        user_data['password'] = hash_password

        new_user = facade.create_user(user_data)
        return {'id': new_user.id, 'first_name': new_user.first_name,
                'last_name': new_user.last_name,
                'email': new_user.email}, 201


@api.route('/users/<user_id>')
class AdminUserModify(Resource):
    @jwt_required()
    def put(self, user_id):
        current_user = get_jwt_identity()
        if not current_user.get('is_admin'):
            return {'error': 'Admin privileges required'}, 403

        data = api.payload
        email = data.get('email')

        # Ensure email uniqueness
        if email:
            existing_user = facade.get_user_by_email(email)
            if existing_user and existing_user.id != user_id:
                return {'error': 'Email already in use'}, 400

        updated_user = facade.update_user(user_id, data)
        if not updated_user:
            return {'error': 'User not found'}, 404
        return {
            'id': updated_user.id,
            'first_name': updated_user.first_name,
            'last_name': updated_user.last_name,
            'email': updated_user.email
        }, 200
