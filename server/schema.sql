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

INSERT rooms (roomname) VALUES ('main');
INSERT rooms (roomname) VALUES ('lobby');

INSERT messages (message, room_id, user_id) Values('Men like you can never change!', 1, 1);
INSERT messages (message, room_id, user_id) Values('Yello', 1, 2);
INSERT messages (message, room_id, user_id) Values('Mello', 2, 3);
INSERT messages (message, room_id, user_id) Values('Wello', 2, 1);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/