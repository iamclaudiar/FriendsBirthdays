CREATE DATABASE birthdays;

CREATE TABLE friend (
  id INT NOT NULL PRIMARY KEY,
  birthday VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255)
);