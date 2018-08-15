var fs = require('fs')
var mongoose = require('mongoose')
var {enHanceBody} = require('../helper/index.js')
var MongoDB = require('../helper/dbUtil.js')

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
      // mongoose.blogDB.find()
      //   .then((res) => {
      //     console.log(res)
      //   })

      res.send(enHanceBody({
        title: 'Programmer',
        detail: '世界上只有两类人，一类是懂二进制的，另一类是不懂的。',
        slogan: 'welcome to my blog'
      }))
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
