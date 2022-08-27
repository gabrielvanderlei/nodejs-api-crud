const express = require('express');
const router = express.Router();

const taskRoutes = require('./taskRoutes')

router.use(taskRoutes)

router.get('*', function(req, res){
    res.status(404).send({ "message": "Not found" });
});

router.use(function(err, req, res, next) {
    res.status(500).send({ "error": err.message });
});

module.exports = router
