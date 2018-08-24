
const {
  MONGODBADRESS
} = require('../config.js')// 引入模块
var mongoose = require('mongoose')
// 链接数据库
// 打印db查看链接是否成功，连接数据库是请确保mongodb数据库已经开启
module.exports = class DB {
  constructor (options) {
    this.db = mongoose.createConnection(MONGODBADRESS, {useNewUrlParser: true})
    this.options = options
    this.init()
  }
  init () {
    return new Promise((resolve, reject) => {
      this.db.on('error', (err) => {
        reject(err)
      })
      this.db.once('open', () => {
        console.log('Connected successfully to server')
        resolve()
      })
    })
  }
  schema (Schema) {
    return new mongoose.Schema(Schema)
  }
  model (name, Schema) {
    return this.db.model(name, Schema)
  }
  getDB () {
    return this.db
  }
  save (model) {
    return new Promise((resolve, reject) => {
      model.save()
        .then(data => {
          console.log(`${data}
          保存数据成功`)
          resolve(data)
          this.db.close()
        })
        .catch((err) => {
          console.log(`${model}保存错误：${err}`)
          reject(err)
          this.db.close()
        })
    })
  }
  drop (model, params = {}) {
    return new Promise((resolve, reject) => {
      model.remove(params)
        .then(msg => {
          resolve(msg)
          this.db.close()
        })
        .catch((err) => {
          console.log(`${model}保存错误：${err}`)
          reject(err)
          this.db.close()
        })
    })
  }
  /**
   *
   * @param {*} model
   * @param {*} query
   * @param {*
   *
   * update(
   * model
   * <query > ,
   * <update > ,
   * {
           upsert: < boolean > ,
           multi: < boolean > ,
           writeConcern: < document >
       }
   )
   }
   query: update的查询条件， 类似sql update查询内where后面的。
   update: update的对象和一些更新的操作符（ 如$, $inc...）等， 也可以理解为sql update查询内set后面的
   upsert: 可选， 这个参数的意思是， 如果不存在update的记录， 是否插入objNew, true为插入， 默认是false， 不插入。
   multi: 可选， mongodb 默认是false, 只更新找到的第一条记录， 如果这个参数为true, 就把按条件查出来多条记录全部更新。
   writeConcern: 可选， 抛出异常的级别。
   */
  update (model, query, update, options = {}) {
    return new Promise((resolve, reject) => {
      model.update(query, update, options)
        .then(msg => {
          resolve(msg)
          this.db.close()
        })
        .catch(err => {
          console.log(`${model}保存错误：${err}`)
          reject(err)
          this.db.close()
        })
    })
  }
  find (model, query, fields, options = {}) {
    return new Promise((resolve, reject) => {
      console.log(model)
      model.findOne(query, (err, data) => {
        if (err) {
          reject(err)
          this.db.close()
        } else {
          resolve(data)
          this.db.close()
        }
      })
    })
  }
}
