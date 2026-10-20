-- Default admin user for local development
-- Username: admin  |  Password: admin123
INSERT INTO users (user_id, user_pass)
SELECT 'admin', 'admin123'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE user_id = 'admin');
