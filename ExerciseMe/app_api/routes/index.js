var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth= jwt({secret: 'thisIsSomeSecret',
userProperty:'payload'
});

var workoutctrl = require('../controllers/workout');
var exercisectrl = require('../controllers/exercise')
var authorizationctrl = require('../controllers/authentication')


router
    .route('/')
    .get(workoutctrl.getAllworkouts)
    .post(workoutctrl.addWorkout)

router
    .route('/:workoutid')
    .get(workoutctrl.getWorkoutById)
    .delete(workoutctrl.deleteWorkoutById)

router.post('/:workoutid/exercise', exercisectrl.addExercise);


router.post('/register', authorizationctrl.register)
router.post('/login', authorizationctrl.login)

module.exports = router;
