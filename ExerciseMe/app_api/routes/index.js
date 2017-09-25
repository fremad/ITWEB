var express = require('express');
var router = express.Router();
var workoutctrl = require('../controllers/workout');
var exercisectrl = require('../controllers/exercise')

router
    .route('/')
    .get(workoutctrl.getAllworkouts)
    .post(workoutctrl.addWorkout)

router
    .route('/:workoutid')
    .get(workoutctrl.getWorkoutById)
    .delete(workoutctrl.deleteWorkoutById)

router.post('/:workoutid/exercise', exercisectrl.addExercise);


module.exports = router;
