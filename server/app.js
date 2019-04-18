const koa = require('koa2');
const router = require('koa-router')();
const axios = require('axios');
const bodyParser = require('koa-bodyparser')
const { query } = require('./data')
const app = new koa();

// 使用ctx.body解析中间件
app.use(bodyParser())
app
  .use(router.routes())
  .use(router.allowedMethods());

router.get('/showtable', async ctx => {
  const sql = 'SHOW TABLES';
  console.log(result.RowDataPacket)
  ctx.body = result;
})
//获取网易的新闻
router.post('/sql', async ctx => {
  const { sql } = ctx.request.body;
  const result = await query(sql);
  ctx.body = result
})
//获取网易的新闻
router.post('/news', async ctx => {
  const { page, count } = ctx.request.body;
  const { data } = await axios.post('https://api.apiopen.top/getWangYiNews', {
    page,
    count
  })
  ctx.body = data
})
app.listen(3001)