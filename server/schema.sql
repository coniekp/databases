DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(10),
  UNIQUE (username),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  objectId INT NOT NULL AUTO_INCREMENT,
  username_id int, 
  roomname VARCHAR(10), 
  createdAt TIMESTAMP,
  text VARCHAR(180),
  updatedAt TIMESTAMP NULL,
  PRIMARY KEY (objectId),
  FOREIGN KEY (username_id) REFERENCES users(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

