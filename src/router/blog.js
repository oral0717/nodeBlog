/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:03
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-11 10:10:25
 */
const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'GET' && path === '/api/blog/list') {
    return {
      msg: '博客列表接口'
    }
  }
  if (method === 'GET' && path === '/api/blog/detail') {
    return {
      msg: '博客详情'
    }
  }
  if (method === 'POST' && path === '/api/blog/new') {
    return {
      msg: '新建博客'
    }
  }
  if (method === 'POST' && path === '/api/blog/update') {
    return {
      msg: '修改博客'
    }
  }
  if (method === 'POST' && path === '/api/blog/delete') {
    return {
      msg: '删除博客'
    }
  }
}

module.exports = handleBlogRouter
