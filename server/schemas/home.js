let DB = require('../helper/db.js')

const db = new DB()
var homeS = db.schema({
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
const Model = db.model('homes', homeS)
module.exports = {
  db, Model
}
