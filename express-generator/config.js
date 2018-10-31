// 默认数据配置页面
// 端口
const PORT = 3001
// 数据库配置如果 没有账号密码为‘’
var options = {
  db_user: '',
  db_pwd: '',
  db_host: 'localhost',
  db_port: 27017,
  db_name: 'blogDB'
}
// 数据库地址
const MONGODBADRESS = `mongodb://${options.db_user ? options.db_user + ':' + options.db_pwd + '@' : options.db_host}:${options.db_port}/${options.db_name}`
// const host = 'http://api.huzhihui.org.cn';
// host地址
const HOST = `http://localhost:${PORT}`
// host地址
const DBNAME = 'blogDB'

module.exports = {
  PORT, MONGODBADRESS, HOST, DBNAME
}
