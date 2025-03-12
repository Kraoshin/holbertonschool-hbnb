from flask import Flask
from flask_restx import Api
from flask_jwt_extended import JWTManager

# Importe tes namespaces (ex: admin, users, amenities, places)
from app.routes.admin import api as admin_ns
from app.routes.users import api as users_ns
from app.routes.amenities import api as amenities_ns
from app.routes.places import api as places_ns

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret-key"  # Remplace par une clé sécurisée
jwt = JWTManager(app)

api = Api(app, title="My API", version="1.0", description="API de gestion")
api.add_namespace(admin_ns, path="/admin")
api.add_namespace(users_ns, path="/users")
api.add_namespace(amenities_ns, path="/amenities")
api.add_namespace(places_ns, path="/places")

if __name__ == "__main__":
    app.run(debug=True)
