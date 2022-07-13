/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 16:40:30
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-13 16:47:11
 */
// 链接数据库的相关配置
const env = process.env.NODE_ENV
// 配置
let MYSQL_CONF
let REDIS_CONF

if (env === 'dev') {
  // mysql
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '983663152',
    port: '3306',
    database: 'myblog'
  }
  // redis
  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  }
}
if (env === 'production') {
  // mysql
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '983663152',
    port: '3306',
    database: 'myblog'
  }
  // redis
  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}