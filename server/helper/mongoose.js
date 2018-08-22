// 数据库配置文件
const {MONGODBADRESS, DBNAME} = require('../config.js')
/**
 *
 * Mongoose类 对数据库增删改查操作
 *
 */
module.exports = class Mongoose {
  constructor (options) {
    this.url = MONGODBADRESS
    this.mongoose = options.mongoose
  }
  // 数据库创建链接
  init () {
    return new Promise((resolve, reject) => {
      this.mongoose.connect(this.url)
        .then((db) => {
          console.log('Connected successfully to server')
          resolve(db)
        })
        .catch(err => {
          console.error(`error:${err}`)
          reject(err)
        })
    })
  }
  /**
   *
   * @param {创建的集合名称} name
   */
  createCollection (name) {
    return this.init()
      .then((db) => {
        var dbase = db.db(DBNAME)
        dbase.createCollection(name, function (err, res) {
          if (err) throw err
          console.log(`${name}创建成功！`)
          db.close()
        })
      })
      .catch((err) => {
        console.log(`error:${err}`)
      })
  }
  /**
   *
   * @param {删除的集合名称} name
   */
  dropCollection (name) {
    return this.init()
      .then(db => {
        var dbo = db.db(DBNAME)
        // 删除 集合
        dbo.collection(name).drop(function (err, delOK) { // 执行成功 delOK 返回 true，否则返回 false
          if (err) throw err
          if (delOK) console.log('集合已删除')
          db.close()
        })
      })
  }
  /**
   *
   * @param {插入的集合名称} name
   * @param {插入的数据} data
   */
  insert (name, data) {
    return this.init()
      .then((db) => {
        var dbo = db.db(DBNAME)
        if (Array.isArray(data)) {
          dbo.collection(name).insertMany(data, function (err, res) {
            if (err) throw err
            console.log(`插入数据成功长度:${res.insertedCount}`)
            db.close()
          })
        } else {
          dbo.collection(name).insertOne(data, function (err, res) {
            if (err) throw err
            console.log(`插入数据成功长度:${res.insertedCount}`)
            db.close()
          })
        }
      })
  }
  /**
 *
 * @param {删除的集合名称} name
 * @param {删除的条件} where
 */
  delete (name, where) {
    return this.init()
      .then((db) => {
        var dbo = db.db(DBNAME)
        if (Array.isArray(where)) {
          dbo.collection(name).deleteMany(where, function (err, res) {
            if (err) throw err
            console.log(res.result.n + ' 条文档被删除')
            db.close()
          })
        } else {
          dbo.collection(name).deleteOne(where, function (err, res) {
            if (err) throw err
            console.log('文档删除成功')
            db.close()
          })
        }
      })
  }
  /**
   *
   * @param {更新数据库的名称} name
   * @param {更新的条件} where
   * @param {更新后的数据} update
   */
  update (name, where, update) {
    return this.init()
      .then((db) => {
        var dbo = db.db(DBNAME)
        if (Array.isArray(update)) {
          dbo.collection(name).updateMany(where, update, function (err, res) {
            if (err) throw err
            console.log(`${res.result.nModified}条文档被更新`)
            db.close()
          })
        } else {
          dbo.collection(name).updateOne(where, update, function (err, res) {
            if (err) throw err
            console.log('文档更新成功')
            db.close()
          })
        }
      })
  }
  /**
   *
   * @param {查询集合的名字} name
   * @param {查询条件} where
   */
  find (name, where) {
    if (!name) {
      console.error(`错误!查询方法需要传入数据库名称`)
      return
    }
    where = where || '{}'
    return new Promise((resolve, reject) => {
      this.init()
        .then(db => {
          var dbo = db.db(DBNAME)
          dbo.collection(name).find(where).toArray(function (err, res) { // 返回集合中所有数据
            if (res.length) {
              resolve(res)
            } else {
              reject(err)
            }
            db.close()
          })
        })
    })
  }
}
