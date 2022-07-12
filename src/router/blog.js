/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:03
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 12:45:45
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
    const result = getDetail(id)
    return result.then((detailData) => {
      return new SuccessModel(detailData)
    })
  }
  if (method === 'POST' && path === '/api/blog/new') {
    const author = '张三'
    req.body.author = author
    const result = newBlog(req.body)
    return result.then((data) => {
      return new SuccessModel(data)
    })
  }
  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(id, body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('更新博客失败')
      }
    })

  }
  if (method === 'POST' && path === '/api/blog/delete') {
    const author = '张三'
    const result = deleteBlog(id, author)
    return result.then((val) => {
      if (val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除博客失败')
      }
    })
  }
}

module.exports = handleBlogRouter
