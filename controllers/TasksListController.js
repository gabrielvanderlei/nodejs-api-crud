const tasks = require('../resources/task');

function TasksListController (req, res) {
    res.send(tasks.readTasks())
}

module.exports = TasksListController;