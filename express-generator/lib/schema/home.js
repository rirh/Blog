const {mongoose} = require('../mongo/db')
module.exports = mongoose.model('homes', new mongoose.Schema({
    title: String,
    detail: String,
    slogan: String,
}));