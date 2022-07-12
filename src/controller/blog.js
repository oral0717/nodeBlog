/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 12:08:12
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 09:53:57
 */
const {exec} = require('../db/mysql')
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}'`
  }
  if (keyword) {
    sql += `and title like '%${keyword}%'`
  }
  sql += `order by createtime desc`
  return exec(sql) // 返回promise
  // return [{
  //   id: 1,
  //   title: '博客A',
  //   content: '内容A',
  //   createTime: 1657512600932,
  //   author: '张三'
  // },{
  //   id: 2,
  //   title: '博客B',
  //   content: '内容B',
  //   createTime: 1657512500932,
  //   author: '李四'
  // }]
}
const getDetail = (id) => {
  return {
    id: 1,
    title: '博客A',
    content: '内容A',
    createTime: 1657512600932,
    author: '张三'
  }
}

const newBlog = (blogData = {}) => {
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  return true
}

const deleteBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}