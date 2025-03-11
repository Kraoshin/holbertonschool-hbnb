from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from config import config

db = SQLAlchemy()
bcrypt = Bcrypt()

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    db.init_app(app)
    bcrypt.init_app(app)

    from app.api.v1.places import api as places_ns
    from app.api.v1.reviews import api as reviews_ns

    app.register_blueprint(places_ns)
    app.register_blueprint(reviews_ns)

    return app
