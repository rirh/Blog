var express = require('express');
var router = express.Router();
const User = require('../lib/schema/user')


/* post users listing. */
router.post('/login', async (req, res, next) => {
  const {
    username,
    password
  } = req.body;
  const responseData = {};
  if (username == '' || password == '') {
    responseData.code = 1;
    responseData.message = '用户名和密码不能为空';
    res.json(responseData);
    return;
  }
  let user = await User.findOne({
    username
  });
  if (user) {
    responseData = {
      code: 1,
      message: '用户不存在，请先注册',
    }
    res.json(responseData);
    return;

  }
  user = await User.findOne({
    password
  });
  if (user) {
    responseData = {
      code: 1,
      message: '密码错误，请重新输入！',
    }
    res.json(responseData);
    return;

  }
  res.json(user);

});

/* post users listing. */
router.post('/register', async (req, res, next) => {

  let params = {};
  for (let k in req.body) params = JSON.parse(k)
  const {
    username,
    password
  } = params;
  const responseData = {};
  let user = await User.findOne({
    username
  });
  console.log(user)

  if (user) {

    responseData = {
      code: 1,
      message: '用户已存在，请直接登录',
    }
    res.json(responseData);

  } else {
    user = new User({
      username: username,
      password: password
    });
    console.log(2)

    user = await user.save()
    res.json(user);
  }


});

module.exports = router;