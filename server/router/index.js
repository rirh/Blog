var fs = require('fs')

var {home} = require('./home.js')
var {resume} = require('./resume.js')
var {init} = require('./Initialization.js')

module.exports = class router {
  constructor (options) {
    this.app = options.app
  }
  // 获取首页数据
  getInit () {
    return this.app.get('/init', init)
  }
  goHome () {
    return this.app.get('/home', home)
  }
  getResume () {
    return this.app.get('/resume', resume)
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
