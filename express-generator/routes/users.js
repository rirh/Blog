const express = require('express');
const router = express.Router();
const User = require('../lib/schema/user')
const encode = require('../util/enbody')



/* post users listing. */
router.post('/login', async (req, res, next) => {
    for (let k in req.body) params = JSON.parse(k)
  const {username,password} = params;
  if (username == '' || password == '') {
    res.json(encode(false, '用户名和密码不能为空'));
    return;
  }
  let user = await User.findOne({username});
  if (!user) {
    res.json(encode(false, '用户不存在请先注册'));
    return;
  }
  user = await User.findOne({password});
  if (!user) {
        res.json(encode(false, '密码错误'));
    return;
  }
    res.status(200).json(encode(true, user));

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
  if (user) {
    res.status(200).json(encode(false,"用户已存在"));
  } else {
    user = await new User({
      username: username,
      password: password
    }).save();
    res.status(200).json(encode(true,user));
  }


});

module.exports = router;