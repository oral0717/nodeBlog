/*
 * @Descripttion:
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:10
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-14 11:35:10
 */
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')
const {set} = require('../db/redis')


const handleUserRouter = (req, res) => {
  const { method, path, query = {}, body, cookie } = req
  // 登录
  if (method === 'GET' && path === '/api/user/login') {
    const { username, password } = query
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        // 设置session
        req.session.username = data.username
        req.session.realname = data.realname
        // 同步到redis
        set(req.sessionId, req.session)
        return new SuccessModel(query, '登录成功')
      }
      return new ErrorModel('登录失败')
    })
  }
  // 登录验证的测试
  if (method === 'GET' && req.path === '/api/user/login-test') {
    console.log(4444, req.session)
    if (req.session.username) {
      return Promise.resolve(new SuccessModel({session: req.session}, '测试登录成功'))
    }
    return Promise.resolve(new ErrorModel('测试登录失败'))
  }
}

module.exports = handleUserRouter
