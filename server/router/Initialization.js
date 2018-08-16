var {enHanceBody} = require('../helper/index.js')
var mongoose = require('mongodb').MongoClient
var Mongoose = require('../helper/mongoose.js')
let Mongo = new Mongoose({mongoose})
let handleBox = [false, false]
const home = {
  db_name: 'home',
  data: {
    title: 'Programmer',
    detail: '世界上只有两类人，一类是懂二进制的，另一类是不懂的。',
    slogan: 'welcome to my blog'
  }
}
const resume = {
  db_name: 'resume',
  data: {
    page1: {
      title: `hello i'm Hui Tiger`,
      detail: `Life doesn’t get easier, you just get stronger`,
      email: `huibikuile@qq.com`
    },
    page2: {
      title: `hello i'm Hui Tiger`,
      detail: `Life doesn’t get easier, you just get stronger`,
      email: `huibikuile@qq.com`
    },
    page3: {
      title: `hello i'm Hui Tiger`,
      detail: `Life doesn’t get easier, you just get stronger`,
      email: `huibikuile@qq.com`
    },
    page4: {
      title: `hello i'm Hui Tiger`,
      detail: `Life doesn’t get easier, you just get stronger`,
      email: `huibikuile@qq.com`
    },
    page5: {
      title: `hello i'm Hui Tiger`,
      detail: `Life doesn’t get easier, you just get stronger`,
      email: `huibikuile@qq.com`
    }
  }
}

exports.init = function (req, res) {
  // 没有数据的时候插入这条数据
  Mongo.find('home').then(
    data => {
      if (Array.isArray(data) && data.length <= 0) {
        Mongo.createCollection(home.db_name)
          .then(() => {
            Mongo.insert(home.db_name, home.data).then(() => {
              handleBox[0] = true
              initSuccess(res)
            })
          })
      } else {
        handleBox[0] = true
        initSuccess(res)
      }
    }
  )
  Mongo.find('home').then(
    data => {
      if (Array.isArray(data) && data.length <= 0) {
        Mongo.createCollection(resume.db_name)
          .then(() => {
            Mongo.insert(resume.db_name, resume.data).then(() => {
              Mongo.find(resume.db_name).then(data => {
                handleBox[1] = true
                initSuccess(res)
              })
            })
          })
      } else {
        handleBox[1] = true
        initSuccess(res)
      }
    })
}

function initSuccess (res) {
  if (handleBox.every(i => i === true)) res.send(enHanceBody({msg: '初始化成功'}))
}
