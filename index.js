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
    res.send({ "message": "Please select the data format" });
});

app.listen(port, () => {
    console.log(`To-Do app listening on port ${port}`)
})