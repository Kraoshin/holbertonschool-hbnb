#!/usr/bin/python3
from app import create_app, db
from app.models.user import User

app = create_app('development')

with app.app_context():
    # Create the database tables if they don't exist
    db.create_all()

    # Create an admin user
    admin_user = User(
        first_name='Admin',
        last_name='User',
        email='admin@example.com',
        is_admin=True
    )
    admin_user.set_password('adminpassword')

    # Add the admin user to the database
    db.session.add(admin_user)
    db.session.commit()

    print('Admin user created successfully')
