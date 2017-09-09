var mongoose = require('mongoose');
var wor = mongoose.model('Workout');

module.exports.index = function(req, res){
    /* var myvar = {
      name: "hanna"
    }; */
    wor.findOne().exec(function(err, workout){
        
        res.json(JSON.stringify(workout))
    })
  };