var fs = require('fs')
var {enHanceBody} = require('../helper/index.js')
var mongoose = require('mongodb').MongoClient
var Mongoose = require('../helper/mongoose.js')
let Mongo = new Mongoose({mongoose})

// const {
//   MONGODBADRESS
// } = require('../config.js')
module.exports = class router {
  constructor (options) {
    this.app = options.app
    this.mongoose = mongoose
  }
  goHome () {
    return this.app.get('/home', (req, res) => {
      Mongo.find('home')
        .then(data => {
          console.log(data)
          res.send(enHanceBody(data[0]))
        })
    })
  }
  getImage () {
    return this.app.get('/image', (req, res) => {
      fs.readFile(`${__dirname}/static/image/nx.jpg`, (error, data) => {
        if (error) {
          console.log(error)
        } else {
          res.send(data)
          res.end()
        }
      })
    })
  }
}
