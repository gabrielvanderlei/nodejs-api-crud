const { tasks } = require('../../resources');

function TasksItemDoneSetController (req, res) {
    const {
        day,
        id
    } = req.params;

    tasks.validateDay(day);

    tasks.doTask({
        id,
        day
    })

    res.send(tasks.readTasks(day))
}

module.exports = TasksItemDoneSetController;