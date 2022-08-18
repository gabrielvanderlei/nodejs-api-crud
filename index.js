const express = require('express');
const IndexGetController = require('./controllers/IndexGetController');
const TasksCreateController = require('./controllers/TasksCreateController');
const TasksDayCreateController = require('./controllers/TasksDayCreateController');
const TasksDayListController = require('./controllers/TasksDayListController');
const TasksItemDeleteController = require('./controllers/TasksItemDeleteController');
const TasksItemDoneSetController = require('./controllers/TasksItemDoneSetController');
const TasksItemReturnSetController = require('./controllers/TasksItemReturnSetController');
const TasksItemUpdateController = require('./controllers/TasksItemUpdateController');
const TasksListController = require('./controllers/TasksListController');

const app = express()
const port = 3000

app.use(express.json());

app.get('/', IndexGetController)
app.get('/tasks', TasksListController)
app.post('/tasks', TasksCreateController)

app.put('/tasks/:id', TasksItemUpdateController)
app.delete('/tasks/:id', TasksItemDeleteController)

app.post('/tasks/:id/done', TasksItemDoneSetController)
app.post('/tasks/:id/return', TasksItemReturnSetController)

app.get('/tasks/:day', TasksDayListController)
app.post('/tasks/:day', TasksDayCreateController)

app.use(function(err, req, res, next) {
    res.status(500).send({ "error": err.message });
});

app.listen(port, () => {
    console.log(`To-Do app listening on port ${port}`)
})