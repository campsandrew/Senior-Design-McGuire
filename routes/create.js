var express = require('express');
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/create-account', function(req, res, next) {
  res.render('create');
});

module.exports = router;