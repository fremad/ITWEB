var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: "thisIsSecret",
    userProperty: 'payload'
  })

var homecontroller = require("../controllers/home");
var exercisecontroller = require("../controllers/exercise")
var ctrlAuth = require('../controllers/authentication');

router
    .route('/')
    .get(homecontroller.index)
    .post(homecontroller.post);

router
    .route('/:workoutid')
    .get(homecontroller.getOne)
    .delete(homecontroller.workoutsDeleteOne)
    .put(homecontroller.workoutsUpdateOne);


router.post('/:workoutid/exercise', exercisecontroller.post);
/* router
    .route('/:workoutid/exerciseid')
        .post(exercisecontroller.post) */

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;