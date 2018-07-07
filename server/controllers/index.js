var models = require('../models');

// var messages =[];
// var counter;
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};
// sendResponse = function(response, data, statusCode) {
//   statusCode = statusCode || 200;
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(data));
// };

module.exports = {
  messages: {
    get: function (req, res) {
      //sendResponse(res, {results: [{username: 'thu', roomname: 'lobby', text: 'hi'}]});
    }, // a function which handles a get request for all messages
    post: function (req, res) {   
      models.messages.post(req.body);
      res.status(201).send('Message posted to database');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


makeActionHandler = function(actionMap) {
  return function(request, response) {
    var action = actionMap[request.method];
    if (action) {
      action(request, response);
    } else {
      exports.sendResponse(response, '', 404);
    }
  };
};


