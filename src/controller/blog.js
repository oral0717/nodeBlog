/*
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-11 12:08:12
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 12:43:56
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
  const {title, content} = blogData
  const sql = `update blogs set title='${title}', content='${content}' where id='${id}'`
  return exec(sql).then((updateData) => { // updateData结构同上方insertData
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

// 删除博客
const deleteBlog = (id, author) => {
  const sql = `delete from blogs where id='${id}' and author='${author}'`
  return exec(sql).then((deleteData) => {
    // console.log(222222, deleteData)
    if (deleteData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}