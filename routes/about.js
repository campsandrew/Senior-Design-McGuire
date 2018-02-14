var express = require('express');
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;