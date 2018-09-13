const express = require('express')

const {
  PORT
  // MONGODBADRESS
} = require('./config.js')

var bodyParser = require('body-parser')
var session = require('express-session')
var cookieParser = require('cookie-parser')

const app = express()
const Route = require('./router/index.js')
// const Mongoose = require('./helper/mongoose.js')
// var mongoose = require('mongodb').MongoClient

// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
// 设置静态资源路径

app.use('/static', express.static('./static'))

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// 解析 application/json
app.use(bodyParser.json())

// // 设置session和cookie
app.use(cookieParser())
app.use(session({
  secret: '12345',
  name: 'testapp',
  resave: false,
  saveUninitialized: true
}))

// 连接mongodb数据库
// mongoose.Promise = global.Promise; //不加这句会报错
// mongoose.connect(MONGODBADRESS)
//   .then((db) => {
//     console.log(db)

//     console.log('Connected to blogDB Mongoose')
//   })
//   .catch(err => {
//     console.error(`error:${err}`)
//   })
// let Mongo = new Mongoose({mongoose})
// // Mongo.init()
// Mongo.find()

// 路由守卫
let routes = new Route({app})

routes.goHome()
routes.getImage()
routes.getInit()
routes.getAudio()
routes.getVedio()
routes.getImageCustom()
// 登陆注册
routes.postLogin()
routes.postRegister()
// 博客
routes.postBlog()
routes.getBlog()

// // 博客系统
// routes.postBlog()
// let Db = require('./helper/db.js')
// const db = new Db()
// db.init()

// 引入模块
// var mongoose = require('mongoose')
// // 链接数据库
// // 打印db查看链接是否成功，连接数据库是请确保mongodb数据库已经开启

// var db = mongoose.createConnection(MONGODBADRESS, {
//   useNewUrlParser: true
// })
// db.on('error', console.error.bind(console, '链接错误'))
// db.once('open', function () {
//   console.log('open once')
// })
// var monSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   detail: {
//     type: String,
//     required: true
//   },
//   slogan: {
//     type: String,
//     required: true
//   }
// })
// var monModel = db.model('home1', monSchema)
// var content = {
//   title: 'Programmer',
//   detail: '世界上只有两类人，一类是懂二进制的，另一类是不懂的。',
//   slogan: 'welcome to my blog'
// }
// var monEntity = new monModel(content)
// console.log(monEntity)
// monEntity.save(function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('插入成功')
//   }
//   db.close()
// })
app.listen(PORT, () => {
  console.log(`server on ${PORT}`)
})
