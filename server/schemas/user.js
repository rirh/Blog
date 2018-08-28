const { db, mongoose } = require('../helper/db.js')

// const db = new DB()
var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: (new Date()).valueOf()
  }
})
const UserModel = db.model('users', userSchema)

module.exports = {
  userSchema,
  UserModel
}
