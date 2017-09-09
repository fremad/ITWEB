var mongoose = require( 'mongoose' );

var workoutSchema = new mongoose.Schema({
    name: {type:String, "default": "Henrik"} 
});

mongoose.model('Workout', workoutSchema, 'Workouts');

