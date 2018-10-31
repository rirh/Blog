const express = require('express');
const router = express.Router();
const Directorys = require('../lib/schema/directory')
const encode = require('../util/enbody')
const context = require('../util/directory')


// 标语范文
/* GET index listing. */


router.get('/', async (req, res, next) => {

  const directorys = new Directorys(context)
  const find = async () => {
    const result = await directorys.find()
    if (result.length > 0) {
      return result;
    } else {
      await directorys.save()
      await find()
    }
  }
  const data = await find();
 
  res.json(encode(true, data[0]))

});

module.exports = router;