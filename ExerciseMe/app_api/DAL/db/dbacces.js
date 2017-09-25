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

module.exports.addExercise = function (workoutid, exercise) {

  return new Promise(function (resolve, reject) {

    db_workouts
      .findById(workoutid)
      .select('exercises')
      .exec(
      function (err, workout) {
        if (err) {
          reject({"message" : "No Data was found in DB"});    
        }
        else {
          workout.exercises.push({
            exercise: exercise.exercise,
            description: exercise.description,
            exset: exercise.exset,
            reps: exercise.reps
          });
          workout.save(function (err, workout) {
            resolve(workout);
          });
        }
      });
  });
}

// module.exports.post = function (req, res) {
//   if (req.params.workoutid) {
//     wor
//       .findById(req.params.workoutid)
//       .select('exercises')
//       .exec(
//       function (err, workout) {
//         if (err) {
//           sendJSONresponse(res, 400, err)
//         } else {
//           doAddExercise(req, res, workout)
//         }
//       })
//   }
//   else {
//     sendJSONresponse(res, 404, {
//       "messsage": "workoutid not found"
//     });
//   }
// };

// var doAddExercise = function (req, res, workout) {
//   if (!workout) {
//     sendJSONresponse(res, 404, "workoutid not found");
//   } else {
//     workout.exercises.push({
//       exercise: req.body.exercise,
//       description: req.body.description,
//       exset: req.body.exset,
//       reps: req.body.reps
//     });
//     workout.save(function (err, workout) {
//       var thisReview;
//       if (err) {
//         sendJSONresponse(res, 400, err);
//       } else {
//         thisReview = workout.exercises[workout.exercises.length - 1];
//         sendJSONresponse(res, 201, thisReview);
//       }
//     });
//   }
// };



var handleError = new function (err) {
  console.log(err)
  return;
};
