const express = require('express');
const router = express.Router();
const Home = require('../lib/schema/home')
const encode = require('../util/enbody')


// 标语范文
/* GET index listing. */
const content = {
  title: 'Programmer',
  detail: '世界上只有10类人，一类是懂二进制的，另一类是不懂的。',
  slogan: 'welcome to my blog'
}

router.get('/', async (req, res, next) => {
  const home = new Home(content)
  const find = async () => {
    const findData = await Home.find()
    if (findData.length > 0) {
      return findData;
    } else {
      await home.save()
      await find()
    }
  }
  const data = await find();
  res.json(encode(true, data[0]))
});

module.exports = router;