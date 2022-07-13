/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 14:57:12
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 17:16:12
 */
const { exec } = require('../db/mysql')

const login = (username, password) => {
  const sql = `select username,realname from users where username = '${username}' and password = '${password}'`
  return exec(sql).then((rows) => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}