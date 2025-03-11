#!/usr/bin/python3
"""
the programme will develop a simple API flask with:
- Security
- AUthentication Technique
"""

from flask import Flask, jsonify, request
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import jwt_required, get_jwt_identity, JWTManager, create_access_token
from flask_jwt_extended import JWTManager, create_access_token


app = Flask(__name__)
auth = HTTPBasicAuth()
app.config['JWT_SECRET_KEY'] = 'secret_key'
jwt = JWTManager(app)


users = {
    "user1": {
        "username": "user1",
        "password": generate_password_hash("password"),
        "role": "user"
        },
    "admin1": {
        "username": "admin1",
        "password": generate_password_hash("password"),
        "role": "admin"
        }
}


@auth.verify_password
def verify_password(username, password):
    User = users.get(username)
    if User and check_password_hash(User["password"], password):
        return username
    return None


@app.route("/")
def home():
    return "Welcome to the Flask API!"


@app.route("/login", methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not username or not password:
        return jsonify({"message": "Missing username or password"}), 400

    cur_user = users.get(username)
    if cur_user and check_password_hash(cur_user['password'], password):
        token = create_access_token(identity=username)
        return jsonify(access_token=token), 200
    return jsonify({"message": "Bad username or password"}), 401


@app.route("/basic-protected", methods=['GET'])
@auth.login_required
def basic_protected():
    return "Basic Auth: Access Granted"


@app.route("/jwt-protected", methods=['GET'])
@jwt_required()
def jwt_protected():
    return "JWT Auth: Access Granted"


@app.route("/admin-only", methods=['GET'])
@jwt_required()
def admin():
    cur_user = get_jwt_identity()
    user = users.get(cur_user)

    if user['role'] == "admin":
        return "Admin Access: Granted"
    return jsonify({"error": "Admin access required"}), 403


@jwt.unauthorized_loader
def handle_unauthorized_error(err):
    return jsonify({"error": "Missing or invalid token"}), 401


@jwt.invalid_token_loader
def handle_invalid_token_error(err):
    return jsonify({"error": "Invalid token"}), 401


@jwt.expired_token_loader
def handle_expired_token_error(err):
    return jsonify({"error": "Token has expired"}), 401


@jwt.revoked_token_loader
def handle_revoked_token_error(err):
    return jsonify({"error": "Token has been revoked"}), 401


@jwt.needs_fresh_token_loader
def handle_needs_fresh_token_error(err):
    return jsonify({"error": "Fresh token required"}), 401


if __name__ == "__main__":
    app.run()
