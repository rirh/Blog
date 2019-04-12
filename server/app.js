const koa = require('koa2');
const app = new koa();
app.use(ctx => {
  ctx.body = { "data": 'hello world!' }
})
app.listen(3001)