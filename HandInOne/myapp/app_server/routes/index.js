var express = require('express');
var router = express.Router();
var homecontroller = require("../controllers/home"); 

/* GET home page. */
  router.get('/', homecontroller.index)
  router
    .route('/data')
      .get(homecontroller.data)
      .post(homecontroller.post)
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

module.exports = router;
