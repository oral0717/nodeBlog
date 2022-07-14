/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:03
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-14 13:47:26
 */
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 统一的登录验证函数
const loginCheck = (req) => {
  if (!req.session.username) {
    return Promise.resolve(
      new ErrorModel('尚未登录')
    )
  }
}
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
  // 新增博客
  if (method === 'POST' && path === '/api/blog/new') {
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      // 未登录
      return loginCheck
    }

    const author = req.session.username
    req.body.author = author
    const result = newBlog(req.body)
    return result.then((data) => {
      return new SuccessModel(data)
    })
  }
  // 更新博客
  if (method === 'POST' && path === '/api/blog/update') {
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      // 未登录
      return loginCheck
    }

    const result = updateBlog(id, body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('更新博客失败')
      }
    })

  }
  // 删除博客
  if (method === 'POST' && path === '/api/blog/delete') {
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      // 未登录
      return loginCheck
    }

    const author = req.session.username
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
