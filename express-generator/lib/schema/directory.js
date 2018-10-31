const {mongoose} = require('../mongo/db')
module.exports = mongoose.model('directorys', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    list: {
        type: Array,
        default:()=>[]
    }
}));