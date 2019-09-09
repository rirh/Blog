const koa = require('koa2');
const router = require('koa-router')();
const axios = require('axios');
const bodyParser = require('koa-bodyparser')
const { query } = require('./data')
const fs = require('fs');
const serve = require('koa-static');
const path = require('path');


const app = new koa();
const staticPath = '../dist';
const main = serve(path.join(__dirname,staticPath));
app.use(main);

// 使用ctx.body解析中间件
app.use(bodyParser())
app
  .use(router.routes())
  .use(router.allowedMethods());


router.get('/', async ctx => {
  ctx.response.type = 'html';
  ctx.response.body = await fs.createReadStream('../dist/index.html', 'utf8');
})
router.get('/showtable', async ctx => {
  const sql = 'SHOW TABLES';
  console.log(result.RowDataPacket)
  ctx.body = result;
})
//数据库操作
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


router.post('/send', async ctx => {
  const { text, desp } = ctx.request.body;
  let url = 'https://sc.ftqq.com/SCU49862Te25589db29a99e11d38f0970198591785cc2b00486a90.send'
  url = `${url}?text=${text}&desp=${desp}`
  const { data } = await axios.get(encodeURI(url))
  ctx.body = data
})

app.on('error', (err, ctx) => console.error('server error', err));
app.listen(3001)