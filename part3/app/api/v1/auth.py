from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from app.services import facade
import time
from datetime import timedelta

api = Namespace('auth', description='Authentication operations')

# Model for input validation
login_model = api.model('Login', {
    'email': fields.String(required=True, description='User email'),
    'password': fields.String(required=True, description='User password')
})

@api.route('/login')
class Login(Resource):
    @api.expect(login_model)
    def post(self):
        """Authenticate user and return a JWT token"""
        credentials = api.payload

        # Validate input
        if not credentials or 'email' not in credentials or 'password' not in credentials:
            return {'error': 'Missing email or password'}, 400
        
        try:
            # Retrieve the user based on the provided email
            user = facade.get_user_by_email(credentials['email'])
        except Exception as e:
            return {'error': 'Internal server error'}, 500
        
        # Check if the user exists and the password is correct
        if not user or not user.verify_password(credentials['password']):
            time.sleep(2)  # Delay to prevent brute force attacks
            return {'error': 'Invalid credentials'}, 401
        
        # Create a JWT token with expiration time
        access_token = create_access_token(
            identity={'id': str(user.id), 'is_admin': user.is_admin},
            expires_delta=timedelta(hours=1)  # Token expires in 1 hour
        )
        
        return {'access_token': access_token}, 200

@api.route('/protected')
class ProtectedResource(Resource):
    @jwt_required()
    def get(self):
        """A protected endpoint that requires a valid JWT token"""
        current_user = get_jwt_identity()
        return {'message': f'Hello, user {current_user["id"]}'}, 200
