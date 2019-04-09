const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const fs = require('fs')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
const { query } = require('./sql/util/db')

async function selectAllData() {

  // let sql = "CREATE TABLE   IF NOT EXISTS  'user' ('id' int(11) NOT NULL AUTO_INCREMENT,'email' varchar(255) DEFAULT NULL,'password' varchar(255) DEFAULT NULL, 'name' varchar(255) DEFAULT NULL,'nick' varchar(255) DEFAULT NULL,'detail_info' json DEFAULT NULL, 'create_time' varchar(20) DEFAULT NULL,'modified_time' varchar(20) DEFAULT NULL, 'level' int(11) DEFAULT NULL, PRIMARY KEY ('id')) ENGINE=InnoDB DEFAULT CHARSET=utf8";
  let sql ="CREATE TABLE user"
    let dataList = await query( sql )
  // const fs_res =await fs.readdirSync('./sql/data.sql');
  // console.log(fs_res,1)
  return dataList
}

async function getData() {
  let dataList = await selectAllData()
  console.log(dataList)
}
getData()

module.exports = app
