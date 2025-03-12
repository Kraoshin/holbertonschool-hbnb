from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import create_access_token
from app.services import facade

auth_api = Namespace("auth", description="Authentication operations")

# 📌 Modèle pour valider l'entrée utilisateur
login_model = auth_api.model("Login", {
    "email": fields.String(required=True, description="User email", example="john@email.com"),
    "password": fields.String(required=True, description="User password", example="Johnd0e!")
})

@auth_api.route("/login")
class UserLogin(Resource):
    @auth_api.expect(login_model)
    def post(self):
        """Authenticate user and return a JWT token"""
        credentials = request.json
        user = facade.get_user_by_email(credentials["email"])

        if not user or not user.check_password(credentials["password"]):
            return {"message": "Invalid email or password"}, 401

        # Génération du token JWT
        access_token = create_access_token(identity={"id": user.id, "is_admin": user.is_admin})
        return {"access_token": access_token}, 200
