const hateoas = {
    "links": [
        {
            "href": "/tasks",
            "rel": "tasks",
            "type" : "GET"
        },
        
        {
            "href": "/tasks",
            "rel": "tasks",
            "type" : "POST"
        },
        
        {
            "href": "/tasks/segunda",
            "rel": "tasks",
            "type" : "GET"
        },
        
        {
            "href": "/tasks/terça",
            "rel": "tasks",
            "type" : "GET"
        },
        
        {
            "href": "/tasks/quarta",
            "rel": "tasks",
            "type" : "GET"
        },
        
        {
            "href": "/tasks/quinta",
            "rel": "tasks",
            "type" : "GET"
        },
        
        {
            "href": "/tasks/sexta",
            "rel": "tasks",
            "type" : "GET"
        },
        
        {
            "href": "/tasks/sabado",
            "rel": "tasks",
            "type" : "GET"
        },
        
        {
            "href": "/tasks/domingo",
            "rel": "tasks",
            "type" : "GET"
        }
    ]
}

function IndexGetController (req, res) {
    res.send({
        application: "To-Do",
        ...hateoas
    })
}

module.exports = IndexGetController;