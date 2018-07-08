var models = require('../models');
var db = require('../db');
// var messages =[];
// var counter;

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) { throw err; }
        console.log(results);
        res.send({results: results});
      });
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {   
      // User.findOrCreate({username: req.body[username]}).complete((err, user) => {
      //   Message.create({username_id: user.id, text: req.body[text], roomname: req.body[roomname]}).complete( (err, user) => {
      //     res.sendStatus(201);
      //   });
      // });
      
      models.messages.post(req.body, (err, results) => {
        if (err) { throw err; }
        res.status(201).send('Message posted to database');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      
      
      
    },
    post: function (req, res) {
      models.users.post(req.body, (err, results) => {
        if (err) { throw err; }
        res.send('Username posted to database');
      });
    }
  }
};



