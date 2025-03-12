/* 2025-03-12 15:26:33 [51 ms] */ 
SELECT * FROM users LIMIT 100;
/* 2025-03-12 15:29:34 [54 ms] */ 
INSERT INTO users (id, first_name, last_name, email, password, is_admin)
VALUES (
    '36c9050e-ddd3-4c3b-9731-9f487208bbc1',  -- ID fixe
    'Admin',  -- first_name
    'HBnB',  -- last_name
    'admin@hbnb.io',  -- email
    '$2b$12$5y8X5y8X5y8X5y8X5y8X5u',  -- Mot de passe hashé (admin1234)
    TRUE  -- is_admin
);
/* 2025-03-12 15:44:44 [0 ms] */ 
SELECT * FROM users LIMIT 100;
