var express = require('express');
var router = express.Router();
var workoutctrl = require('../controllers/workout');

router
    .route('/')
    .get(workoutctrl.getAllworkouts)
    .post(workoutctrl.addWorkout)

router
    .route('/:workoutid')
    .get(workoutctrl.getWorkoutById)
    .delete(workoutctrl.deleteWorkoutById)

module.exports = router;
