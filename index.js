const express = require('express');
const responseHooks = require('express-response-hooks');

const jsonToXMLMiddleware = require('./middlewares/jsonToXMLMiddleware');
const allRoutes = require('./routes')

const app = express()
const port = 3000

app.use(responseHooks())
app.use('/json', express.json(), allRoutes)
app.use('/xml', jsonToXMLMiddleware, allRoutes);

app.get('/', function(req, res){
    const hateoas = {
        "links": [
            {
                "href": "/xml",
                "rel": "tasks",
                "type" : "GET"
            },

            {
                "href": "/json",
                "rel": "tasks",
                "type" : "GET"
            }
        ]
    }

    res.send({ 
        "message": "Please select the data format",
        ...hateoas 
    });
});

app.listen(port, () => {
    console.log(`To-Do app listening on port ${port}`)
})