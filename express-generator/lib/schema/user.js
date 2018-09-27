const {mongoose} = require('../mongo/db')
module.exports = mongoose.model('users', new mongoose.Schema({
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
}));