// Library Required.
const mongoose = require('mongoose');

// Estrablish a Connection.
mongoose.connect('mongodb://localhost/todolist_db');

// Acquire the connection.
const db = mongoose.connection;

// Error.
db.on('error', console.error.bind(console.log, 'Error Connecting to the database'));

// Up and running print the message.
db.once('open', function() {
    console.log('Successfully connected to the database');
});
