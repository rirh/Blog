var express = require('express');
var router = express.Router();
// var mongoose = require('../config/mongoose.js');
// var db = mongoose();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(db)
  res.jsonp({ user: 'welcome to express ',password:'this get api response password' })
});2

module.exports = router;

