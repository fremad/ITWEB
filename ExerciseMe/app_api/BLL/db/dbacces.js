var mongoose = require('mongoose');
var db_workouts = mongoose.model('Workout');
var utils = require('../utility');

module.exports.getWorkoutById = function (id) {

  return new Promise(function (resolve, reject) {
    db_workouts.findById(id)
      .exec((err, workout) => {
        if (err) {
          handleError(err)
        }
        resolve(workout);
      })
  })
}

module.exports.getAllWorkouts = function () {

  return new Promise(function (resolve, reject) {
    db_workouts.find()
      .exec((err, workout) => {
        if (err) {
          handleError(err)
        }
        resolve(workout);
      })
  })
}

module.exports.deleteWorkoutById = function (id) {
  return new Promise(function (resolve, reject) {
    db_workouts.findByIdAndRemove(id)
      .exec((err, workout) => {
        if (err) {
          handleError(err)
        }
        resolve(workout);
      })
  })
}

module.exports.addWorkout = function (workout) {

  return new Promise(function (resolve, reject) {

    console.log("Called and workout" + workout.name)


    db_workouts.create({
      name: workout.name
    }, function (err, workout) {
      if (err) {
        handleError(err);
      } else {
        resolve(workout);
      }
    });
  })
}

var handleError = new function (err) {
  console.log(err)
  return;
};
        //   db_workouts.create({
        //     name: workout.name
        //   }
        // ).exec((err, aworkout) => {
        //     if (err) {
        //       handleError(err)
        //     }
        //     resolve(aworkout);
        //   })