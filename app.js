/*
 * @Descripttion: 
 * @version:
 * @Author: Oral
 * @Date: 2022-07-10 17:34:54
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-13 11:24:43
 */
const qs = require('querystringify')
const handleUserRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')

// 用于处理post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers["content-type"] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const url = req.url
  req.path = url.split('?')[0]

  // 解析query
  req.query = qs.parse(url.split('?')[1])

  // 解析cookie
  req.cookie = {}
  const cookieStr = req.headers.cookie || '' // k1=v1;k2=v2;k3=v3
  cookieStr.split(';').forEach(item => {
    if (!item) return
    const itemArr = item.split('=')
    const key = itemArr[0].trim()
    const value = itemArr[1].trim()
    req.cookie[key] = value
  })

  // 处理post data
  getPostData(req).then(postData => {
    req.body = postData

    // 博客接口路由
    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
      blogResult.then(blogData => {
        res.end(JSON.stringify(blogData))
        return
      })
      return
    }

    // 用户接口路由
    const userData = handleUserRouter(req, res)
    if (userData) {
      userData.then(userData => {
        res.end(JSON.stringify(userData))
        return
      })
      return
    }

    // 未命中路由，404
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.write("404 Not Found\n")
    res.end()
  })
}
module.exports = serverHandle