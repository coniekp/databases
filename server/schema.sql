-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectId INT (10) NOT NULL AUTO_INCREMENT,
  username VARCHAR(10) ,
  roomname VARCHAR(10) , 
  createdAt TIMESTAMP  ,
  text VARCHAR(180) ,
  updatedAt TIMESTAMP NULL,
  PRIMARY KEY (objectId)
);

CREATE TABLE texts (
  textID int(10) NOT NULL AUTO_INCREMENT,
  FOREIGN KEY ('objectId')
)

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

