var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message) {

      db.connection.query ('INSERT INTO messages (`username`, `roomname`, `text`) VALUES (\'' + message.username + '\',\'' + message.roomname + '\', \'' + message.text + '\');', (err, results) => {
        if (err) { throw err; }
        console.log('results:' + results);
        done();
      });
      
      db.connection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

