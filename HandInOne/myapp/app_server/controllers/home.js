var request = require('request');
var apiOptions = {                      
  server : "http://localhost:3000"      
};          
if (process.env.NODE_ENV  === 'production') 
  { apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}                            

module.exports.singleworkout = function(req, res){
  
  var path = '/api/' + req.params.workoutid;
  
  
  console.log(path)
  console.log("WEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")

    var requestOptions = { 
      url : apiOptions.server + path,
      method : "GET",
      json : {},
      qs : {
      }
    };
    request(
      requestOptions,
        function(err, response, body){
          if(err) {
            console.log("something went wrong");
          }
          else
          {
            console.log(body);
          }
          res.render('workout', { title: 'ExerciseMe' , workout: body});      
        })
}

module.exports.index = function(req, res){
    
  console.log(req.body);

  var path = '/api';

  var requestOptions = { 
    url : apiOptions.server + path,
    method : "GET",
    json : {},
    qs : {
    }
  };
  request(
    requestOptions,
      function(err, response, body){
        if(err) {
          console.log("something went wrong");
        }
        else
        {
          console.log(body);
        }
        res.render('index', { title: 'ExerciseMe' , names: body});      
      })
  };

  module.exports.data = function(req, res){
    
    var myvar = {
      name: 'john'
    };
    res.json(JSON.stringify(myvar))
  };

  module.exports.post = function(req, res){
    
    var input = req.body.name;

    var myvar = {
      name: input
    };
    res.json(JSON.stringify(myvar))
  };