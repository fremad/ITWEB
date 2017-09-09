var mongoose = require('mongoose');
var wor = mongoose.model('Workout');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };

module.exports.index = function(req, res){
    /* var myvar = {
      name: "hanna"
    }; */
    wor.find().exec(function(err, workout){
        
        res.status(200);
        res.json(JSON.stringify(workout))
    })
  };
  


  /* POST a new location */
/* /api/locations */
module.exports.post = function(req, res) {
    console.log(req.body);
    wor.create({
      name: req.body.name,
      surname: req.body.surname,
      }
    , function(err, workout) {
      if (err) {
        console.log(err);
        sendJSONresponse(res, 400, err);
      } else {
        console.log(location);
        sendJSONresponse(res, 201, workout);
      }
    });
  };
  
  module.exports.workoutsDeleteOne = function(req, res) {
    var workoutid = req.params.workoutid;

    if(workoutid){
        wor
            .findByIdAndRemove(workoutid)
                .exec(
                    function(err, workout) {
                        if(err) {
                            console.log(err);
                            sendJSONresponse(res, 404, err);
                            return;
                        }
                        sendJSONresponse(res, 204, null)
                    }
                );
    } else {
        sendJSONresponse(res, 404, {
            "message": "No locationid"
        });
    }
  }

  module.exports.workoutsUpdateOne = function(req, res) {
    if (!req.params.workoutid) {
      sendJSONresponse(res, 404, {
        "message": "Not found, workoutid is required"
      });
      return;
    }
    wor
      .findById(req.params.workoutid)
      .exec(
        function(err, workout) {
          if (!workout) {
            sendJSONresponse(res, 404, {
              "message": "locationid not found"
            });
            return;
          } else if (err) {
            sendJSONresponse(res, 400, err);
            return;
          }
          workout.name = req.body.name;
          workout.surname = req.body.surname;
          workout.save(function(err, workout) {
            if (err) {
              sendJSONresponse(res, 404, err);
            } else {
              sendJSONresponse(res, 200, workout);
            }
          });
        }
    );
  };
  