from flask import Flask, request
from flask_restx import Api, Namespace, Resource, fields
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
import time

# Simulation d'une base de données utilisateur
class MockUser:
    def __init__(self, id, email, password, is_admin=False):
        self.id = id
        self.email = email
        self.password = password  # Dans une vraie app, hache le mot de passe
        self.is_admin = is_admin

    def verify_password(self, password):
        return self.password == password  # À remplacer par un vrai hashage

# Simulons un service de gestion des utilisateurs
class Facade:
    users = {
        "user@example.com": MockUser(1, "user@example.com", "password123", is_admin=False)
    }

    @staticmethod
    def get_user_by_email(email):
        return Facade.users.get(email)

facade = Facade()

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret-key"  # Change cette clé en prod
jwt = JWTManager(app)

api = Api(app, version="1.0", title="Auth API", description="A simple authentication API")
auth_ns = Namespace("auth", description="Authentication operations")

# Modèle pour valider l'entrée utilisateur
login_model = auth_ns.model(
    "Login",
    {
        "email": fields.String(required=True, description="User email"),
        "password": fields.String(required=True, description="User password"),
    },
)

@auth_ns.route("/login")
class Login(Resource):
    @auth_ns.expect(login_model)
    def post(self):
        """Authenticate user and return a JWT token"""
        credentials = request.json  # Utilise request.json au lieu de api.payload

        if not credentials or "email" not in credentials or "password" not in credentials:
            return {"error": "Invalid input"}, 400

        # Recherche de l'utilisateur par email
        user = facade.get_user_by_email(credentials["email"])

        # Vérification de l'utilisateur et du mot de passe
        if not user or not user.verify_password(credentials["password"]):
            time.sleep(2)  # Protection contre brute force
            return {"error": "Invalid credentials"}, 401

        # Création du token JWT avec expiration de 1 heure
        access_token = create_access_token(
            identity={"id": str(user.id), "is_admin": user.is_admin}, expires_delta=False
        )

        return {"access_token": access_token}, 200

@auth_ns.route("/protected")
class ProtectedResource(Resource):
    @jwt_required()
    def get(self):
        """A protected endpoint that requires a valid JWT token"""
        current_user = get_jwt_identity()
        return {"message": f"Hello, user {current_user['id']}"}, 200

api.add_namespace(auth_ns, path="/auth")

if __name__ == "__main__":
    app.run(debug=True)
