const { tasks } = require('../../resources');

const hateoas = {
    "links": [
        {
            "href": "/",
            "rel": "tasks",
            "type" : "POST"
        }
    ]
}

function TasksDayListController (req, res) {
    const {
        day
    } = req.params;

    tasks.validateDay(day);

    res.send({
        ...tasks.readTasks(day),
        ...hateoas
    });
}

module.exports = TasksDayListController;