const { tasks } = require('../../resources');

function TasksListController (req, res) {
    res.send(tasks.readTasks())
}

module.exports = TasksListController;