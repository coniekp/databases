var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      
      db.connection.query ('SELECT messages.objectId, messages.roomname, messages.text, messages.createdAt, users.username FROM messages LEFT JOIN users ON (messages.username_id = users.id)', (err, results) => {
        if (err) { throw err; }
        console.log('results:' + JSON.stringify(results));
        callback(null, results);
      });
      
    }, // a function which produces all the messages
    post: function (message, callback) {

      // module.exports.users.get(message.username, (err, results) => {
      //   if (err) { throw err;}
      //   username = results[0].id;
      db.connection.query('SELECT id FROM users WHERE username = \'' + message.username + '\'', (err, results) => {
        console.log('KHANNNNNNNNN' + JSON.stringify(results));
        db.connection.query ('INSERT INTO messages (`username_id`, `roomname`, `text`) VALUES (\'' + results[0].id + '\',\'' + message.roomname + '\', \'' + message.text + '\');', (err, results) => {
          // if (err) { throw err; }
          // console.log('post message results:' + JSON.stringify(results));
          callback(null, results);
        });
        
      });
      
      //db.connection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (username, callback) {
      db.connection.query ('SELECT id FROM users WHERE username = \'' + username + '\'', (err, results) => {
        if (err) { callback(err); }
        console.log('results:' + JSON.stringify(results));
        callback(null, results);
      });
    },
    post: function (body, callback) {
      db.connection.query ('INSERT INTO users (`username`) VALUES (\'' + body.username + '\');', (err, results) => {
        if (err) { throw err; }
        console.log('results:' + results);
        callback (null, results);
      });

      
    }
  }
};

