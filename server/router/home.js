var {enHanceBody} = require('../helper/index.js')
var { db, Model } = require('../schemas/home.js')
// var mongoose = require('mongodb').MongoClient
var Mongo = new (require('../helper/mongoose.js'))({
  mongoose: require('mongodb').MongoClient
})

exports.home = function (req, res) {
  var content = {
    title: 'Programmer',
    detail: '世界上只有两类人，一类是懂二进制的，另一类是不懂的。',
    slogan: 'welcome to my blog'
  }
  Mongo.find('homes', {})
    .then(data => {
      res.send(enHanceBody({
        ...data[0],
        msg: '成功'
      }))
    })
    .catch(err => {
      console.log(err)
      db.save(new Model(content))
        .then(data => {
          console.log(data)
          Mongo.find('homes', {})
            .then(data => {
              res.send(enHanceBody({
                ...data[0],
                msg: '成功'
              }))
            })
        })
        .catch(err => {
          console.log(err)
        })
    })
}
// exports.home = function (req, res) {
//   Mongo.find('home')
//     .then(data => {
//       if (Array.isArray(data) && data.length > 0) {
//         res.send(enHanceBody(data[0]))
//       } else {
//         // 没有数据的时候插入这条数据
//         Mongo.createCollection('home')
//           .then(() => {
//             Mongo.insert('home', {
//               title: 'Programmer',
//               detail: '世界上只有两类人，一类是懂二进制的，另一类是不懂的。',
//               slogan: 'welcome to my blog'
//             }).then(() => {
//               Mongo.find('home').then(data => {
//                 res.send(enHanceBody(data[0]))
//               })
//             })
//           })
//       }
//     })
// }

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
