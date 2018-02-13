var express = require('express');
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('dashboard');
});

module.exports = router;