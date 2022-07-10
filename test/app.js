/*
 * @Descripttion:
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-08 20:51:32
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-10 15:46:35
 */
const http = require('http');
const path = require('path')
const qs = require('querystringify')

const server = http.createServer((req, res) => {
  const { url, method } = req
  const path = url.split('?')[0]
  const query = qs.parse(url.split('?')[1])

  res.setHeader('Content-Type', 'application/json')

  // 返回的数据
  const resData = {
    method,
    url,
    path,
    query
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
})
server.listen(8000)
console.log('OK')