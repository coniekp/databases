var models = require('../models');

// var messages =[];
// var counter;

module.exports = {
  messages: {
    get: function (req, res) {
      sendResponse(res, {results: [{username: 'thu', roomname: 'lobby', text: 'hi'}]});
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      collectData(req, function(message) {
      //message.objectId = ++objectIdCounter;  ADD OBJ ID 
      //messages.push(message);      SEND POST REQUEST TO DB 
        models.messages.post(message);
        //
        sendResponse(res, {objectId: 0}, 201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

collectData = function(request, callback) {
  var data = '';
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    callback(JSON.parse(data));
  });
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


