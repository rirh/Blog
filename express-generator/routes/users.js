var express = require('express');
var router = express.Router();
const User = require('../lib/schema/user')


/* post users listing. */
router.post('/users/login',async (req, res, next)=> {
   const {username,password} = req.body;
   const responseData={};
  if (username == '' || password == '') {
    responseData.code = 1;
    responseData.message = '用户名和密码不能为空';
    res.json(responseData);
    return;
  }
  let user= await User.findOne({ username});
  if(user){
    responseData ={
      code:1,
      message: '用户不存在，请先注册',
    } 
     res.json(responseData);
         return;

  }
 user = await User.findOne({password});
 if(user){
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
router.post('/users/register', async (req, res, next) => {
   const {username,password} = req.body;
   const responseData={};
  
  let user= await User.findOne({ username});
  if(user){
    responseData ={
      code:1,
      message: '用户已存在，请直接登录',
    } 
     res.json(responseData);
         return;

  }
  user = new User({
   username: username,
   password: password
 });
  user=await user.save()
  res.json(user);

});

module.exports = router;
