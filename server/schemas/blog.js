const {
  db,
  mongoose
} = require('../helper/db.js')
var blogSchema = mongoose.Schema({
  title: String, // 文章标题
  context: String, // 文章内容
  contexthtml: String,
  tag: String, // 文章标签
  like_num: {
    type: Number,
    default: 0
  }, // 喜欢数量
  review_num: {
    type: Number,
    default: 0
  }, // 评论数量
  look_num: {
    type: Number,
    default: 0
  }, // 浏览次数
  authId: String,
  date: {
    type: Date,
    default: (new Date()).valueOf()
  }
})
const BlogModel = db.model('blogs', blogSchema)
module.exports = {
  blogSchema,
  BlogModel
}
