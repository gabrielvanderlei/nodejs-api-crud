const tasks = require('../resources/task');

function TasksItemReturnSetController (req, res) {
    const {
        day,
        id
    } = req.params;

    tasks.validateDay(day);

    tasks.undoTask({
        id,
        day
    })

    res.send(tasks.readTasks(day))
}

module.exports = TasksItemReturnSetController;