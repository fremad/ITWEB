var express = require('express');
var router = express.Router();
var homecontroller = require("../controllers/home"); 

router
    .route('/')
        .get(homecontroller.index)
        .post(homecontroller.post);

router
    .route('/:workoutid')
        .delete(homecontroller.workoutsDeleteOne)
        .put(homecontroller.workoutsUpdateOne)

module.exports = router;
