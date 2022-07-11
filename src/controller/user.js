/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 14:57:12
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-11 15:05:17
 */
const loginCheck = (username, password) => {
  if (username === 'zhangsan' && password === '123') {
    return true
  }
  return false
}

module.exports = {
  loginCheck
}