const {
  MONGODBADRESS,
  DBNAME
} = require('../config.js')
// 连接mongodb数据库
// mongoose.Promise = global.Promise; //不加这句会报错
module.exports = class Mongoose {
  constructor (options) {
    this.url = MONGODBADRESS
    this.mongoose = options.mongoose
  }
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
  createCollection (name) {
    this.init()
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
  dropCollection (name) {
    this.init()
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
  insert (name, data) {
    this.init()
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
  delete (name, data) {
    this.init()
      .then((db) => {
        var dbo = db.db(DBNAME)
        if (Array.isArray(data)) {
          dbo.collection(name).deleteMany(data, function (err, res) {
            if (err) throw err
            console.log(res.result.n + ' 条文档被删除')
            db.close()
          })
        } else {
          dbo.collection(name).deleteOne(data, function (err, res) {
            if (err) throw err
            console.log('文档删除成功')
            db.close()
          })
        }
      })
  }
  update (name, where, update) {
    this.init()
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
  find (dbname, where) {
    if (!dbname) {
      console.error(`错误!查询方法需要传入数据库名称`)
      return
    }
    where = where || '{}'
    return new Promise((resolve, reject) => {
      this.init()
        .then(db => {
          var dbo = db.db(DBNAME)
          dbo.collection(dbname).find(where).toArray(function (err, res) { // 返回集合中所有数据
            if (res) {
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
