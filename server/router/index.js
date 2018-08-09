var fs = require('fs')

module.exports = class router {
  constructor (options) {
    this.app = options.app
  }
  goHome () {
    return this.app.get('/', (req, res) => {
      res.send('index')
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
