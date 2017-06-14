// this one handles request from apps (that uses routes) 
// and callbacks to the controllers with proper response content

var db = require('../db');
var app = require('../app.js');
var dbMessages = [];

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('fhjdgsfaASIGNAIFHNKNADIFNG');
    }, // a function which produces all the messages
    post: function (req, res) {
      console.log('fhjdgsfaASIGNAIFHNKNADIFNG');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      // route to /classes/users
      console.log('=======================yay user get model');
    },
    post: function (req, res) {
      console.log('=======================yay user post model');
    }
  }
};