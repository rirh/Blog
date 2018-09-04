const { enHanceBody } = require('../helper/index.js')
const { BlogModel } = require('../schemas/blog.js')
exports.getBlog = async (req, res) => {
  console.log(req.query)
  const {
    authId,
    pageNo,
    pageSize
  } = req.query
  let query = {}
  if (authId) query = { authId }
  let data = await BlogModel.find(query)
  console.log(data.length)
  // data = await BlogModel.find()
  // console.log(data.length)
  res.send(enHanceBody({
    list: [...data],
    // list: clone(data).splice(((pageNo - 1) * pageSize), ((pageNo - 1) * pageSize + pageSize)),
    total: data.length,
    status: 200,
    msg: '成功'
  }))
}
exports.createBlog = async (req, res) => {
  let data = {}
  for (let k in req.body) data = JSON.parse(k)
  const params = {
    title: data.title, // 文章标题
    context: data.text, // 文章内容
    contexthtml: data.html,
    tag: '', // 文章标签
    like_num: 0, // 喜欢数量
    review_num: 0, // 评论数量
    look_num: 0, // 浏览次数
    authId: data.authId,
    date: (new Date()).valueOf()
  }
  data = await new BlogModel(params).save()
  console.log(params)
  res.send(enHanceBody({
    status: 200,
    msg: '成功'
  }))
}
