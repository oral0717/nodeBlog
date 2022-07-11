/*
 * @Descripttion: 
 * @version:
 * @Author: Oral
 * @Date: 2022-07-10 17:34:54
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-11 12:19:57
 */
const qs = require('querystringify')
const handleUserRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')

const serverHandle = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const url = req.url
  req.path = url.split('?')[0]
  req.query = qs.parse(url.split('?')[1])

  // 博客接口路由
  const blogData = handleBlogRouter(req, res)
  if (blogData) {
    res.end(JSON.stringify(blogData))
    return
  }

  // 用户接口路由
  const userData = handleUserRouter(req, res)
  if (userData) {
    res.end(JSON.stringify(userData))
    return
  }

  // 未命中路由，404
  res.writeHead(404, { "Content-Type": "text/plain" })
  res.write("404 Not Found\n")
  res.end()
}
module.exports = serverHandle