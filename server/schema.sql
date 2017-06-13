
CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  username varchar(255) NOT NULL
);

CREATE TABLE rooms (
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  roomname varchar(255) NOT NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  message varchar(255),
  room_id int,
  user_id int,
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- need to comment below when actually using
 
INSERT users (username) VALUES ('Bobby');
INSERT users (username) VALUES ('Tom');
INSERT users (username) VALUES ('Harry');

INSERT rooms (roomname) VALUES ('Lobby');
INSERT rooms (roomname) VALUES ('Front');

INSERT messages (message, room_id, user_id) Values('Hello', 2, 1);
INSERT messages (message, room_id, user_id) Values('Yello', 2, 2);
INSERT messages (message, room_id, user_id) Values('Mello', 1, 3);
INSERT messages (message, room_id, user_id) Values('Wello', 1, 1);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- SQL ID starts from 1. 
-- if 0 is used in seeding, it will throw foreign key constraint error
-- SET FOREIGN_KEY_CHECKS = 0; -- need to disable when actually using
-- SET FOREIGN_KEY_CHECKS = 1; 