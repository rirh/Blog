# Blog
**个人博客网站**

**启动方式**

# server

**启动本地mongod数据库**
_~/mongod --dbpath ~/mongodb/data/db_

**安装模块**
_npm install_
**测试启动**
_nodemon_
**正式启动**
_npm start_


**部署到服务器使用PM2**

**www文件启动**
_pm2 start ./bin/www --watch_

**单个文件启动**
_pm2 restart app.js_

**停止服务**

_pm2 stop app_name|app_id_

#client

**启动**
_npm run dev_
**编译**
_npm run build_
