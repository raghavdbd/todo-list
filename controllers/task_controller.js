// Connecting to the database.
const db = require('../config/mongoose');

// Including Collection of taskSchema.
const Task = require('../models/task');

// to format Date 
const dateformater = require('dateformat');

// get request for home page url
module.exports.home = function(req, res) {

    Task.find({}, function(err, tasks) {

        if(err) {
            console.log(`Error in fetching data from the Database : ${err}`);
            return;
        }

        return res.render('home', {
            tasks_list : tasks
        });
        
    }); 

};

// Contoller to add a Task.
module.exports.addTask = function(req, res) {
    
    Task.create( {
        description : req.body.description,
        category : req.body.category,
        due_date : dateformater(req.body.due_date, "mediumDate")
    }, function(err, newTask) {

        if(err) {
            console.log(`Error in inserting task in the database: ${err}`);
            return;
        }
        console.log(req.body.due_date);
        console.log('*********', newTask);
        return res.redirect('back');
    });
};

// Controller to delete a task.
module.exports.deleteTask = function(req, res) {

    var checked = req.body.checked;
    console.log(checked);
    var type = typeof(checked);
    if(type == "string") {
        Task.findByIdAndDelete(checked, function(err) {

            if(err) {
                console.log(`Error on deleting ${err}`);
                return;
            }
        });
    } else {
        for(var i = 0; i < checked.length; i++) {
            Task.findByIdAndDelete(checked[i], function(err) {

                if(err) {
                    console.log(`Error on Deleting ${err}`);
                    return;
                }
            })
        }
    }

    return res.redirect('back');
};

// Controller to dumy buttons in task list.
module.exports.doNothing = function(req, res) {
    console.log('BACK');
    return res.redirect('back');
};