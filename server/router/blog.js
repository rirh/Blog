var {
  enHanceBody
} = require('../helper/index.js')
// var User = require('../models/user')

var mongoose = require('mongodb').MongoClient
var Mongoose = require('../helper/mongoose.js')
let Mongo = new Mongoose({
  mongoose
})

exports.login = function (req, res) {
  //   Mongo.find('home')
  //     .then(data => {
  let params
  for (let k in req.body) {
    params = JSON.parse(k)
  }
  console.log(params)
  Mongo.find('user', params)
    .then(data => {
      res.send(enHanceBody({
        ...data[0],
        msg: '成功'
      }))
    })
    .catch(err => {
      console.log(err)
      res.send({
        code: 400,
        data: {
          msg: '账户未注册'
        }
      })
    })
    // })
}
exports.createBlog = function (req, res) {
  //   Mongo.find('home')
  //     .then(data => {
  let params
  for (let k in req.body) {
    params = JSON.parse(k)
  }
  params.date = new Date()
  Mongo.createCollection('blog')
    .then(res => {
      console.log(res)
      Mongo.insert('blog', params)
    })
  res.send(enHanceBody({
    msg: '保存成功'
  }))

  // })
}

// function initHome () {
//   Mongo.createCollection('home')
//     .then(res => {
//       Mongo.insert('home', {
//         title: 'Programmer',
//         detail: '世界上只有两类人，一类是懂二进制的，另一类是不懂的。',
//         slogan: 'welcome to my blog'
//       }).then(() => {
//         this.home()
//       })
//     })
// }
