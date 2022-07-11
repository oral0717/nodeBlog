/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:10
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-11 15:05:48
 */
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { loginCheck } = require('../controller/user')

const handleUserRouter = (req, res) => {
  const { method, path, query = {}, body } = req

  if (method === 'POST' && path === '/api/user/login') {
    const { username, password } = body
    const result = loginCheck(username, password)
    if (result) {
      return new SuccessModel(body)
    }
    return new ErrorModel('登录失败')
  }
}

module.exports = handleUserRouter
