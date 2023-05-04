CREATE DATABASE list;
USE list;

CREATE TABLE Customers (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(25),
  email VARCHAR(255),
  userpassword VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE Orders (
 id INT PRIMARY KEY,
 painter VARCHAR(50) NOT NULL,
 imagename VARCHAR(255) NOT NULL,
 imageDesc VARCHAR(20),
 price DECIMAL(6,2),
 image VARCHAR(500) NOT NULL,
 customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

