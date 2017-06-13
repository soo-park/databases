// this guy sends the actual response
var models = require('../models');
var request = require('request');
var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      // process request and send it to model so that it can deal with text parsing
      console.log(req.query);
      // receives it back from model.index, and send the file as response
      res.status(200).send('yay');
      // res.sendFile('where the index.js in model points to');
    }, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to the database

      // when the post comes in, get user name and replace by query that name to UID

      var findUserID = 'SELECT users.id FROM users WHERE username="' + req.body.username + '"';
      var findRoomID = 'SELECT rooms.id FROM users WHERE roomname="' + req.body.roomname + '"';
      
      var queryArgs = {
        username: req.body.username,
        message: req.body.message,
        roomname: req.body.roomname
      };
      
      // get query to find the user ID
      db.query(findUserID, queryArgs, function(err, results) {
        if (err) {
          console.log('ERROR: ' + err);
        } else {
          // add the user_id to the object
          delete queryArgs.username;
          queryArgs['user_id'] = results[0].id;          
        }
      });
      
      
      db.query(findRoomID, queryArgs, function(err, results1) {
        // add room_id to the object
        delete queryArgs.roomname;
        // objToPass['room_id'] = results1[0].id;
        console.log(queryArgs, ' is the obejct to pass');
    
        var queryString = 'INSERT INTO messages SET ?';
        db.query(queryString, queryArgs, function(err, results2) {
          // delete the user name from the object
          if (err) {
            console.log('ERROR: ' + err);
          } else {
            console.log('Record inserted for messages');
          }
        });
      });
          
          
          
      res.send('OK');
    }
  },

  users: {
    get: function (req, res) {
      console.log('========================yay user get');
    },
    post: function (req, res) {
      var queryArgs = req.body.username;
      var queryString = 'INSERT users (username) VALUES ("' + queryArgs + '");';
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('ERROR: ' + err);
        } else {
          console.log('Record inserted for a user');
        }
      });
      res.send('OK');
    }
  }
};