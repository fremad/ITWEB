var mongoose = require('mongoose');


module.exports.index = function(req, res){

    var myvar = {
      name: "hanna"
    };
    res.status(200);
    res.json(JSON.stringify(myvar))
  };