/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 12:08:12
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 12:00:43
 */
const { exec } = require('../db/mysql')

// 查询博客列表
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
}

// 博客详情
const getDetail = (id) => {
  let sql = `select * from blogs where id='${id}'`

  return exec(sql).then((rows) => {
    return rows[0]
  })
}

// 新建博客
const newBlog = (blogData = {}) => {
  const { title = '', content='', author = '佚名' } = blogData
  const createTime = Date.now()

  const sql = `insert into blogs (title, content, createtime, author) values ('${title}', '${content}', ${createTime}, '${author}')`
  return exec(sql).then((insertData) => {
    // const insertData = {
    //   fieldCount: 0,
    //   affectedRows: 1, // 影响行数
    //   insertId: 8, // 插入新数据的id
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '',
    //   protocol41: true,
    //   changedRows: 0 // 执行update时会有值
    // }
    return {
      id: insertData.insertId
    }
  })
}

// 修改博客
const updateBlog = (id, blogData = {}) => {
  return true
}

// 删除博客
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