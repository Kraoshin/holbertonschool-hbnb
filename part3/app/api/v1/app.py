from flask import Flask
from flask_restx import Api
from flask_jwt_extended import JWTManager
from app.routes.auth import auth_api
from app.routes.admin import admin_api

app = Flask(__name__)

# 🔐 Configuration JWT
app.config["JWT_SECRET_KEY"] = "super-secret-key"  # Remplace par une clé sécurisée
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = False  # Token permanent (change si nécessaire)
jwt = JWTManager(app)

# 📌 Initialisation de l'API REST
api = Api(app, title="Admin API", version="1.0", description="API pour la gestion des utilisateurs et des ressources")

# 📌 Enregistrement des routes
api.add_namespace(auth_api, path="/auth")
api.add_namespace(admin_api, path="/admin")

if __name__ == "__main__":
    app.run(debug=True)
