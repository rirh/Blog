const { MONGODBADRESS } = require('../../config.js')// 引入模块

// getting-started.js
const mongoose = require('mongoose')

mongoose.connect(MONGODBADRESS, { useNewUrlParser: true });

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('Connected successfully to server...')})




module.exports = {
  mongoose, db
}
