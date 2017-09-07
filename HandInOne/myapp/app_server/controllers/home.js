module.exports.index = function(req, res){
    res.render('index', { title: 'ExerciseMe' });
  };

  module.exports.data = function(req, res){
    

    var myvar = {
      name: 'john'
    };
    res.json(JSON.stringify(myvar))
  };