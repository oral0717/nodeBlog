/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:03
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 10:47:27
 */
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req, res) => {
  const { method, path, query = {}, body } = req
  const {id} = query

  if (method === 'GET' && path === '/api/blog/list') {
    const { author = '', keyword = '' } = query
    const result = getList(author, keyword)
    return result.then((listData) => { // 返回一个promise
      return new SuccessModel(listData)
    })
  }
  if (method === 'GET' && path === '/api/blog/detail') {
    const data= getDetail(id)
    return new SuccessModel(data)
  }
  if (method === 'POST' && path === '/api/blog/new') {
    const data = newBlog(body)
    return new SuccessModel(data)
  }
  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(id, body)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新博客失败')
    }
  }
  if (method === 'POST' && path === '/api/blog/delete') {
    const result = deleteBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除博客失败')
    }
  }
}

module.exports = handleBlogRouter
