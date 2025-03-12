from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.services import facade

admin_api = Namespace("admin", description="Admin operations")

# 📌 Modèle pour création d'un utilisateur
user_model = admin_api.model("User", {
    "first_name": fields.String(required=True, description="First name", example="John"),
    "last_name": fields.String(required=True, description="Last name", example="Doe"),
    "email": fields.String(required=True, description="Email", example="john@email.com"),
    "password": fields.String(required=True, description="Password", example="Johnd0e!"),
    "is_admin": fields.Boolean(description="Admin privileges", example=True)
})

@admin_api.route("/users/")
class AdminUserCreate(Resource):
    @jwt_required()  # 🚨 Vérification du token
    @admin_api.expect(user_model)
    def post(self):
        """Create a new user (Admin only)"""
        current_user = get_jwt_identity()
        if not current_user["is_admin"]:
            return {"message": "Admin privileges required"}, 403

        user_data = request.json

        if facade.get_user_by_email(user_data["email"]):
            return {"message": "Email already registered"}, 400

        new_user = facade.create_user(user_data)
        return new_user.to_dict(), 201

@admin_api.route("/users/<user_id>")
class AdminUserModify(Resource):
    @jwt_required()
    def delete(self, user_id):
        """Delete a user (Admin only)"""
        current_user = get_jwt_identity()
        if not current_user["is_admin"]:
            return {"message": "Admin privileges required"}, 403

        user = facade.get_user(user_id)
        if not user:
            return {"message": "User not found"}, 404

        del facade.users_db[user_id]
        return {"message": "User deleted successfully"}, 200
