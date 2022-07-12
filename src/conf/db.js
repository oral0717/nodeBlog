/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 16:40:30
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 10:29:19
 */
// 链接数据库的相关配置
const env = process.env.NODE_ENV
// 配置
let MYSQL_CONF = {}

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '983663152',
    port: '3306',
    database: 'myblog'
  }
}
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '983663152',
    port: '3306',
    database: 'myblog'
  }
}

module.exports = {MYSQL_CONF}