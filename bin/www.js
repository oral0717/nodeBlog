/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 17:26:30
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-10 19:02:53
 */
const http = require('http');
const PORT = 1988
const serverHandle = require('../app')
const server = http.createServer(serverHandle)
server.listen(PORT)