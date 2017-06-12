CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
    ID int AUTO_INCREMENT,
    Message varchar(255) NOT NULL,
    Roomname varchar(255) NOT NULL,
    Uid int NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (Uid) REFERENCES users(ID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
    ID int AUTO_INCREMENT PRIMARY KEY,
    Name varchar(255),
    PRIMARY KEY (ID)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

