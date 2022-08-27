const { tasks } = require('../../resources');

function TasksDayListController (req, res) {
    const {
        day
    } = req.params;

    tasks.validateDay(day);

    res.send(tasks.readTasks(day));
}

module.exports = TasksDayListController;