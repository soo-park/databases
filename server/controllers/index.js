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
      console.log('I am the post response');
      var message = '';
      req.on('data', function(data) {
        message += data;
      });
      
      req.on('end', function (req, res) {
        messages.push(JSON.parse(message));
      });

      res.send('OK');
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('========================yay user get');
    },
    post: function (req, res) {
      console.log('=========================yay user post');
      console.log(req.body);

      var queryArgs = req.body.username;
      var queryString = 'INSERT users (Name) VALUES ("' + queryArgs + '");';
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('ERROR: ' + err);
        } else {
          console.log('Record inserted');
        }
        // done();
      });

      res.send('OK');
    }
  }
};

