
const router = require('koa-router')();
const axios = require('axios');

router.post('/News', async ctx => {
  const { page, count } = ctx.request.body;
  const { data } = await axios.post('https://api.apiopen.top/getWangYiNews', {
    page,
    count
  })
  ctx.body = data
})