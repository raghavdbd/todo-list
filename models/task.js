// Required Library.
const mongoose = require('mongoose');

// Creating Schema or Document.
const taskSchema = new mongoose.Schema({
    // Creating Fields.
    description : {
        type : String, 
        required : true
    },
    category : {
        type : String,
        required : true
    },
    due_date : {
        type : String,
        required : true
    }
});

// Craeting Collection.
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;