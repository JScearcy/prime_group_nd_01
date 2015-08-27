var express = require('express');
var router = express.Router();
var path = require('path');
var randomEmployee = require('../custom_modules/random_name')

//serve the index.html directly when the site is visited
router.get('/', function(req, res) {
  res.send(new randomEmployee.Employee());
});

module.exports = router;
