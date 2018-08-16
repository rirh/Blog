var mongoose = require('mongoose')
var home = require('../schemas/home.js')

module.exports = mongoose.model('home', home)
