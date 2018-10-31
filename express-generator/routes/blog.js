const express = require('express');
const router = express.Router();
const Directorys = require('../lib/schema/directory')
const encode = require('../util/enbody')
const context = require('../util/directory')


// 标语范文
/* GET index listing. */


router.get('/', async (req, res, next) => {
  const home = new Directorys(context)
  const find = async () => {
    const findData = await Directorys.find()
console.log(findData)
    if (findData.length > 0) {
      return findData;
    } else {
      await home.save()
      await find()
    }
  }
  const data = await find();
  res.json(encode(true, data))
});

module.exports = router;