var {enHanceBody} = require('../helper/index.js')
var { UserModel } = require('../schemas/user.js')

exports.login = async (req, res) => {
  let params
  for (let k in req.body) params = JSON.parse(k)
  let username = await UserModel.find({username: params.username})
  console.log(username)
  if (username.length <= 0) {
    res.send({
      code: 400,
      data: {
        msg: '账户未注册'
      }
    })
  } else {
    let password = await UserModel.find({password: params.password})
    if (password.length <= 0) {
      res.send({
        code: 400,
        data: {
          msg: '密码错误'
        }
      })
    } else {
      res.send(enHanceBody({
        ...password[0]._doc,
        msg: '成功'
      }))
    }
  }
}

exports.register = async (req, res) => {
  let params
  for (let k in req.body) {
    params = JSON.parse(k)
  }
  let data = await UserModel.find({username: params.username})
  if (data.length > 0) {
    res.status(200).send({
      code: 400,
      data: {
        status: false,
        msg: '注册失败,用户已存在'
      }
    })
  } else {
    data = await new UserModel(params).save()
    if (data) {
      res.send(enHanceBody({
        msg: '成功',
        status: true
      }))
    }
  }
}
