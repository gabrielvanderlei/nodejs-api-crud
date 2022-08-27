const { tasks } = require('../../resources');

function TasksItemUpdateController (req, res) {
    const {
        id
    } = req.params;

    const {
        day,
        content
    } = req.body;

    tasks.validateDay(day);
    tasks.validateContent(content);

    tasks.updateTask({
        id,
        day,
        content
    })

    res.send(tasks.readTasks(day))
}

module.exports = TasksItemUpdateController;