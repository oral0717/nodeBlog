/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-10 19:14:03
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-11 12:28:42
 */
const { getList, getDetail } = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req, res) => {
  const {method, path, query} = req

  if (method === 'GET' && path === '/api/blog/list') {
    const { author = '', keywords = '' } = query
    console.log(query)
    const listData = getList(author,keywords)
    return new SuccessModel(listData)
  }
  if (method === 'GET' && path === '/api/blog/detail') {
    const { id } = query
    const data= getDetail(id)
    return new SuccessModel(data)
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
