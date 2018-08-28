const { enHanceBody } = require('../helper/index.js')
const { HomeModel } = require('../schemas/home.js')
// 标语范文
const content = {
  title: 'Programmer',
  detail: '世界上只有两类人，一类是懂二进制的，另一类是不懂的。',
  slogan: 'welcome to my blog'
}
// 如果有的话就查询出来没有的话就创建
const findHome = async (query) => {
  let data = await HomeModel.find(query)
  if (data.length <= 0) {
    data = await new HomeModel(content).save()
    return data._doc
  }
  return data[0]._doc || data[0] || data
}

exports.home = async (req, res) => {
  let data = await findHome({title: 'Programmer'})
  res.send(enHanceBody({
    ...data,
    msg: '成功'
  }))
}
