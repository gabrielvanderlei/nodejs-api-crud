let tasksId = 0;
let tasks = {
    "segunda": {},
    "terça": {},
    "quarta": {},
    "quinta": {},
    "sexta": {},
    "sabado": {},
    "domingo": {}
}

const getNewId = () => {
    return ++tasksId;
}

const createTask = ({
    day,
    content
}) => {
    tasks[day][getNewId()] = {
        content,
        done: false
    }
}

const readTasks = (day) => {
    return day ? tasks[day] : tasks;
}

const readTaskById = ({
    id
}) => {
    return tasks[day][id]
}

const updateTask = ({
    day,
    content,
    id
}) => {
    tasks[day][id] = {
        ...tasks[day][id],
        content
    }
}

const doTask = ({
    day,
    id
}) => {
    tasks[day][id].done = true;
}

const undoTask = ({
    day,
    id
}) => {
    tasks[day][id].done = false;
}

const deleteTask = ({
    day,
    id
}) => {
    delete tasks[day][id];
}

const isValidDay = (day) => {
    return Object.keys(tasks).includes(day);
}

const validateDay = (day) => {
    if(!day){
        throw new Error("Envie o dia da semana.")
    }

    if(!isValidDay(day)){
        throw new Error("Dia das semana inválido.")
    }
}

const validateContent = (content) => {
    if(!content){
        throw new Error("Envie o conteúdo de sua tarefa.")
    }
}

module.exports = {
    createTask,
    readTasks,
    updateTask,
    deleteTask,
    isValidDay,
    doTask,
    undoTask,
    validateDay,
    validateContent,
    readTaskById
}