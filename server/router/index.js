var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

const fs = require('fs')

const {
  home
} = require('./home.js')
const {
  resume
} = require('./resume.js')
const {
  init
} = require('./Initialization.js')
const {
  login,
  register
} = require('./user.js')
const {
  createBlog
} = require('./blog.js')

const path = require('path').resolve(__dirname, '..')

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
  postRegister () {
    return this.app.post('/register', urlencodedParser, register)
  }
  postLogin () {
    return this.app.post('/login', urlencodedParser, login)
  }
  postBlog () {
    return this.app.post('/blog', urlencodedParser, createBlog)
  }
  getImage () {
    return this.app.get('/image', (req, res) => {
      fs.readFile(`${path}/static/image/${req.query.name}.jpg`, 'binary', (err, file) => {
        if (err) {
          console.log(err)
        } else {
          res.writeHead(200, {
            'Content-Type': 'image/jpeg'
          })
          res.write(file, 'binary')
          res.end()
        }
      })
    })
  }
  getImageCustom () {
    return this.app.get('/images', (req, res) => {
      fs.readFile(`${path}/static/image/${req.query.name}`, 'binary', (err, file) => {
        if (err) {
          console.log(err)
        } else {
          res.writeHead(200, {
            'Content-Type': 'image/jpeg'
          })
          res.write(file, 'binary')
          res.end()
        }
      })
    })
  }
  getAudio () {
    return this.app.get('/audio', (req, res) => {
      fs.readFile(`${path}/static/audio/${req.query.name}.mp3`, 'binary', (err, file) => {
        if (err) {
          console.log(err)
        } else {
          res.writeHead(200, {
            'Content-Type': 'audio/mp3'
          })
          res.write(file, 'binary')
          res.end()
        }
      })
    })
  }
  getVedio () {
    return this.app.get('/video', (req, res) => {
      fs.readFile(`${path}/static/video/${req.query.name}.mp4`, 'binary', (err, file) => {
        if (err) {
          console.log(err)
        } else {
          res.writeHead(200, {
            'Content-Type': 'video/mpeg4'
          })
          res.write(file, 'binary')
          res.end()
        }
      })
    })
  }
}
