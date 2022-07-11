/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:10
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-11 10:54:15
 */
const handleUserRouter = (req, res) => {
  const {method, path} = req

  if (method === 'POST' && path=== '/api/user/login') {
    return {
      msg: '登录接口'
    }
  }
}

module.exports = handleUserRouter
