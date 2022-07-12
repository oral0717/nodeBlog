/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 14:57:12
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 13:13:35
 */
const { exec } = require('../db/mysql')

const loginCheck = (username, password) => {
  const sql = `select username,realname from users where username = '${username}' and password = '${password}'`
  return exec(sql).then((rows) => {
    return rows[0] || {}
  })
}

module.exports = {
  loginCheck
}