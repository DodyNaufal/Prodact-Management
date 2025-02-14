CREATE DATABASE IF NOT EXISTS test_app;

CREATE TABLE users (
 id int NOT NULL AUTO_INCREMENT,
 email varchar(255) NOT NULL,
 password varchar(255) NOT NULL,
 role varchar(255) DEFAULT 'user',
 nama varchar(255) NOT NULL,
 created_at datetime DEFAULT current_timestamp(),
 updated_at datetime DEFAULT NULL ON UPDATE current_timestamp(),
 PRIMARY KEY (id),
 UNIQUE KEY(email)
 );

 CREATE TABLE products (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 price DECIMAL(10, 2),
 stock INT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );

 CREATE TABLE bang_dody (
 id int NOT NULL AUTO_INCREMENT,
 email varchar(255) NOT NULL,
 password varchar(255) NOT NULL,
 role varchar(255) DEFAULT 'user',
 nama varchar(255) NOT NULL,
 created_at datetime DEFAULT current_timestamp(),
 updated_at datetime DEFAULT NULL ON UPDATE current_timestamp(),
 PRIMARY KEY (id),
 UNIQUE KEY(email)
 );

 INSERT INTO products (name, price, stock, created_at) VALUES
  ('johndoe', '100', '50', '2023-08-01 00:00:00');