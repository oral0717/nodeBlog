/*
 * @Descripttion:
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:10
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-13 12:36:33
 */
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')

const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  // console.log('d.toGMTString() is', d.toGMTString())
  return d.toGMTString()
}
const handleUserRouter = (req, res) => {
  const { method, path, query = {}, body, cookie } = req
  // 登录
  if (method === 'GET' && path === '/api/user/login') {
    const { username, password } = query
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        // 服务端操作cookie，httpOnly限制客户端操作
        res.setHeader('Set-Cookie',`username=${data.username};path=/;expires=${getCookieExpires()};httpOnly`) //expires格式必须是Mon Jul 25 2022 00:26:29 GMT+0800
        return new SuccessModel(query, '登录成功')
      }
      return new ErrorModel('登录失败')
    })
  }
  // 登录验证的测试
  // if (method === 'GET' && req.path === '/api/user/login-test') {
  //   console.log('cookie:', cookie)
  //   if (cookie.username) {
  //     return Promise.resolve(new SuccessModel('测试登录成功'))
  //   }
  //   return Promise.resolve(new ErrorModel('测试登录失败'))
  // }
}

module.exports = handleUserRouter
