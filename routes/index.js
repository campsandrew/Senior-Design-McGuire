var express = require('express');
<<<<<<< HEAD
var path = require("path");
=======
var path = require('path');
>>>>>>> develop
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
=======
  res.sendFile(path.join(__dirname, '../', 'views/', 'index.html'));
>>>>>>> develop
});

module.exports = router;
