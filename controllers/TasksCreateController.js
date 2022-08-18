const tasks = require('../resources/task');

function TasksCreateController (req, res) {
    const {
        day,
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

module.exports = TasksCreateController;