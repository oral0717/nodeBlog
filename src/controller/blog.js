/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 12:08:12
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-11 14:55:40
 */
const getList = (author, keywords) => {
  return [{
    id: 1,
    title: '博客A',
    content: '内容A',
    createTime: 1657512600932,
    author: '张三'
  },{
    id: 2,
    title: '博客B',
    content: '内容B',
    createTime: 1657512500932,
    author: '李四'
  }]
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