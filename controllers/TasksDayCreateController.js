const tasks = require('../resources/task');

function TasksDayCreateController (req, res) {
    const {
        day
    } = req.params;

    const {
        content
    } = req.body;

    tasks.validateDay(day);
    tasks.validateContent(content);

    tasks.createTask({
        day,
        content
    })

    res.send(tasks.readTasks(day))
}

module.exports = TasksDayCreateController;