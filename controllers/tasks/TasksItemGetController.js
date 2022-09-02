const { tasks } = require('../../resources');

const hateoas = {
    "links": [
        {
            "href": "/",
            "rel": "tasks",
            "type" : "GET"
        },

        {
            "href": "/",
            "rel": "tasks",
            "type" : "POST"
        },

        {
            "href": "/",
            "rel": "tasks",
            "type" : "DELETE"
        },

        {
            "href": "/done",
            "rel": "tasks",
            "type" : "POST"
        },

        {
            "href": "/return",
            "rel": "tasks",
            "type" : "POST"
        }
    ]
}

function TasksItemGetController (req, res) {
    const {
        id
    } = req.params;

    res.send({
        ...tasks.readTaskById({ id }),
        ...hateoas
    })
}

module.exports = TasksItemGetController;