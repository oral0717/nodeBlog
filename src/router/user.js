/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:10
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 13:17:28
 */
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { loginCheck } = require('../controller/user')

const handleUserRouter = (req, res) => {
  const { method, path, query = {}, body } = req

  if (method === 'POST' && path === '/api/user/login') {
    const { username, password } = body
    const result = loginCheck(username, password)
    return result.then(data => {
      if (data.username) {
        return new SuccessModel(body)
      }
      return new ErrorModel('登录失败')
    })
  }
}

module.exports = handleUserRouter
