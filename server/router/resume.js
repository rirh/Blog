const { enHanceBody } = require('../helper/index.js')
const { ResumeModel } = require('../schemas/resume.js')

// 如果有的话就查询出来没有的话就创建

exports.resume = async (req, res) => {
  let data = await ResumeModel.find()
  if (data.length < 1) {
    data = await new ResumeModel({}).save()
    data = await ResumeModel.find()
  }
  res.send(enHanceBody({
    ...data,
    msg: '成功'
  }))
}
