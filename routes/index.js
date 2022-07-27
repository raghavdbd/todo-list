// Including framework.
const express = require('express');

// Adding route to the todo.
const router = express.Router();

// Adding controller.
const taskController = require("../controllers/task_controller");

console.log('Router Loaded');

// mapping controllers to the routes.
router.get('/', taskController.home);
router.post('/take-action/add', taskController.addTask);
router.post('/show-todo/delete', taskController.deleteTask);
router.post('/show-todo/go-back', taskController.doNothing);


module.exports = router;