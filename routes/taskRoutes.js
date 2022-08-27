const express = require('express');

const {
    IndexGetController,
    TasksCreateController,
    TasksDayListController,
    TasksDayCreateController,
    TasksItemUpdateController,
    TasksItemDeleteController,
    TasksItemDoneSetController,
    TasksItemReturnSetController,
    TasksListController
} = require('../controllers/tasks');

const router = express.Router();

router.get('/', IndexGetController)

router.route('/tasks')
    .get(TasksListController)
    .post(TasksCreateController)

router.route('/tasks/:day')
    .get(TasksDayListController)
    .post(TasksDayCreateController)

router.route('/tasks/:id')
    .put(TasksItemUpdateController)
    .delete(TasksItemDeleteController)

router.post('/tasks/:id/done', TasksItemDoneSetController)
router.post('/tasks/:id/return', TasksItemReturnSetController)

module.exports = router;