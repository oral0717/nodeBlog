/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:10
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-10 19:22:30
 */
const handleUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'POST' && path=== '/api/user/login') {
    return {
      msg: '登录接口'
    }
  }
}

module.exports = handleUserRouter
