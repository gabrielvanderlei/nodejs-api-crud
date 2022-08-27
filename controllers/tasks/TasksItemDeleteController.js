const { tasks } = require('../../resources');

function TasksItemDeleteController (req, res) {
    const {
        id
    } = req.params;

    const {
        day
    } = req.body;

    tasks.validateDay(day);

    tasks.deleteTask({
        id,
        day
    })

    res.send(tasks.readTasks(day))
}

module.exports = TasksItemDeleteController;