/*
 * @Descripttion: 
 * @version:
 * @Author: Oral
 * @Date: 2022-07-10 17:34:54
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-10 19:06:57
 */
const qs = require('querystringify')
const serverHandle = (req, res) => {
  const { url, method } = req
  const path = url.split('?')[0]
  const query = qs.parse(url.split('?')[1])

  res.setHeader('Content-Type', 'application/json')

  // 返回的数据
  const resData = {
    method,
    url,
    path,
    query,
    env: process.env.NODE_ENV
  }
  if (method === 'GET') {
    res.end(
      JSON.stringify(resData)
    )
  }
  if (method === 'POST') {
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = postData
      res.end(JSON.stringify(resData))
    })
  }
}
module.exports = serverHandle