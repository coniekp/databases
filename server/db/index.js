var mysql = require('mysql');
// var Sequelize = require('sequelize');

// const sequelize = new Sequelize ('chat', 'student', 'student');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});



module.exports.connection = connection;

// const User = sequelize.define('user', {
//   username : Sequelize.STRING
// });
// const Message = sequelize.define('message', { 
//   roomname: Sequelize.STRING,
//   text: Sequelize.STRING
// });

// Users.create();
// Messages.create();
// Message.belongsTo(User);
// User.hasMany(Message);

// User.sync();
// Message.sync();
// })
// module.exports.User = User;
// module.exports.Message = Message;
