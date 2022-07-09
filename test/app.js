/*
 * @Descripttion:
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-08 20:51:32
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-09 16:31:49
 */
const http = require('http');
const path = require('path')
const qs = require('querystringify')

const server = http.createServer((req, res) => {
  const { url, method } = req
  if (method === 'GET') {
    req.query = qs.parse(url.split('?')[1])
    console.log(method, req.query, url)
    res.end(
      JSON.stringify(req.query)
    )
  }
  if (method === 'POST') {
    console.log(method, req.headers['Content-Type'])
    let postData = ''
    req.on('data', chunk => {
      console.log(111111111,chunk)
      postData += chunk.toString()
    })
    req.on('end', () => {
      console.log('postData-----', postData)
      res.end('hello world !')
    })
  }
})
server.listen(8000)
console.log('OK')