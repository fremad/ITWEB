var mongoose = require( 'mongoose' );

var workoutSchema = new mongoose.Schema({
    name:       {type:String, "default": "Henrik"},
    surname:    {type:String, "default": "beaver", required: true}
});

mongoose.model('Workout', workoutSchema, 'Workouts');

