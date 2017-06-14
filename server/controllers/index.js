// this guy sends the actual response
var models = require('../models');
var request = require('request');
var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      var query = 'SELECT * FROM messages';
      
      db.query(query, function(err, results) {
        if (err) {
          console.log( 'GET QUERY EROrR');
        } else {
          console.log('query working in get');
          res.status(200);
                    
          var messages = [];
          for (let i = 0; i < results.length; i++) {
            var newObj = {};
            var findUserName = 'SELECT users.username FROM users WHERE id="' + results[i].user_id + '"';
            // get query to find the user ID
            db.query(findUserName, function(err, queryArr) {
              if (err) {
                console.log('ERROR: ' + err);
              } else {
                newObj['username'] = queryArr[0].username;
                newObj['message'] = results[i].message;
                newObj['roomname'] = 'main';
                messages[i] = newObj;
                console.log(newObj);
              }
            });
          }
          res.json({ 'results': results });
          // console.log(messages);
          
          // { 'results': messages }
          //     var stubMsg = {
          //       username: 'Jono',
          //       message: 'Do my bidding!'
          //     }; 
        }
      });
      // console.log(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var queryArgs = {
        username: req.body.username,
        message: req.body.message,
        roomname: req.body.roomname
      };
      
      // get query to find the user ID
      var findUserID = 'SELECT users.id FROM users WHERE username="' + queryArgs.username + '"';
      db.query(findUserID, queryArgs, function(err, results) {
        if (err) {
          console.log('ERROR: ' + err);
        } else {
          // add the user_id to the object
          queryArgs['user_id'] = results[0].id;
          
          var findRoomID = 'SELECT rooms.id FROM rooms WHERE roomname="' + queryArgs.roomname + '"';
          db.query(findRoomID, queryArgs.roomname, function(err, results) {

            console.log('=======================finding the room id===================', queryArgs);
            var queryString = 'INSERT INTO messages SET ?';
            db.query(queryString, queryArgs, function(err, results) {
              // delete the user name from the object
              if (err) {
                console.log('ERROR: ' + err);
              } else {
                console.log('Record inserted for messages');
              }
            });
          });
        }
        res.send('OK');
      });
    }
  },

  users: {
    get: function (req, res) {
      console.log('========================yay user get======================');
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