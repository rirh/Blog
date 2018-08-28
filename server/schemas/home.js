const { db, mongoose } = require('../helper/db.js')
var homeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  slogan: {
    type: String,
    required: true
  }
})
const HomeModel = db.model('homes', homeSchema)
module.exports = {
  homeSchema, HomeModel
}
