const {
  db,
  mongoose
} = require('../helper/db.js')

// const db = new DB()
var initSchema = mongoose.Schema({
  ip: {
    type: String,
    required: true
  },
  count: Number,
  date: {
    type: Date,
    default: (new Date()).valueOf()
  }
})
const InitModel = db.model('inits', initSchema)

module.exports = {
  initSchema,
  InitModel
}
