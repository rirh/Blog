var Schema = require('mongoose').Schema

var homeS = new Schema({
  title: String, // 标题
  detail: String, // 详情
  slogan: String// 标语

})

module.exports = homeS
