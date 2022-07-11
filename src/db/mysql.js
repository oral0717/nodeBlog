/*
 * @Descripttion:
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 16:45:29
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-11 16:56:22
 */
const mysql = require('mysql');
const { MYSQL_CONF } = require('../conf/db')

const connect = mysql.createConnection(MYSQL_CONF)
// 开始连接
connect.connect()

// 统一执行sql
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    connect.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  exec
}



