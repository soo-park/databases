CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int AUTO_INCREMENT,
  Message varchar(255) NOT NULL,
  Roomname varchar(255) NOT NULL,
  Uid int NOT NULL,
  PRIMARY KEY (ID)
  -- FOREIGN KEY (Uid) REFERENCES users(ID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  ID int AUTO_INCREMENT PRIMARY KEY,
  Name varchar(255)
);

INSERT users (Name) VALUES ('Bobby');
INSERT users (Name) VALUES ('Tom');
INSERT users (Name) VALUES ('Harry');

INSERT messages (Message, Roomname, Uid) Values('Hello', 'Lobby', 0);
INSERT messages (Message, Roomname, Uid) Values('Mello', 'Lobby', 1);
INSERT messages (Message, Roomname, Uid) Values('Yello', 'Front', 2);
INSERT messages (Message, Roomname, Uid) Values('Wello', 'Front', 1);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

