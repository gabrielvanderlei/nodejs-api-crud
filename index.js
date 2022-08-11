const express = require('express')
const tasks = require('./resources/task') 

const app = express()
const port = 3000

app.use(express.json());

app.get('/tarefas', (req, res) => {
    res.send(tasks.readTasks())
})

app.get('/tarefas/:day', (req, res) => {
    const {
        day
    } = req.params;

    tasks.validateDay(day);

    res.send(tasks.readTasks(day));
})

app.post('/tarefas', (req, res) => {
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
})

app.post('/tarefas/:day', (req, res) => {
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
})

app.put('/tarefas/:day/:id', (req, res) => {
    const {
        day,
        id
    } = req.params;

    const {
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
})

app.post('/tarefas/:day/:id/finalizada', (req, res) => {
    const {
        day,
        id
    } = req.params;

    tasks.validateDay(day);
    
    tasks.doTask({
        id,
        day
    })

    res.send(tasks.readTasks(day))
})

app.post('/tarefas/:day/:id/retomada', (req, res) => {
    const {
        day,
        id
    } = req.params;

    tasks.validateDay(day);
    
    tasks.undoTask({
        id,
        day
    })

    res.send(tasks.readTasks(day))
})

app.listen(port, () => {
  console.log(`To-Do app listening on port ${port}`)
})
