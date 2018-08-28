const {
  InitModel
} = require('../schemas/init.js')
const {
  enHanceBody
} = require('../helper/index.js')

exports.init = async (req, res) => {
  // 没有数据的时候插入这条数据
  let params
  for (let k in req.body) {
    params = JSON.parse(k)
  }
  let data = await InitModel.find({ip: params.ip})
  if (data.length > 0) {
    let update = await InitModel.updateOne({ip: params.ip}, {count: ++data[0]._doc.count})
    console.log(`${++data[0]._doc.count}${update}`)
  } else {
    params.count = 1
    console.log(params)
    new InitModel(params).save()
  }
  res.send(enHanceBody({
    msg: '成功'
  }))
}
