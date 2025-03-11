CREATE DATABASE if NOT EXISTS hbnb_test;

CREATE TABLE if NOT EXISTS User (
    id CHAR(36) PRIMARY KEY,  -- UUID format
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,  -- Email must be unique
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE  -- Default to FALSE for non-admin users
)
