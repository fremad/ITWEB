var express = require('express');
var router = express.Router();
var homecontroller = require("../controllers/home"); 

router.get('/', homecontroller.index)

module.exports = router;
