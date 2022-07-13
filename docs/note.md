<!--
 * @Descripttion: 
 * @version: 
 * @Author: Oral
 * @Date: 2022-07-08 10:37:29
 * @LastEditors: Oral
 * @LastEditTime: 2022-07-12 15:47:41
-->
## 调试方法 inspect
--inspect=1874  项目启动命令里需要这个
项目跑起来以后，打开 chrome://inspect, 页面中会有对应inspect页面，点击打开调试面板  

## 技术方案 
接口设计： 入参                   url参数                       备注
登录   /api/user/login   post   postData中有用户名和密码  
博客列表/api/blog/list    get    author keyword         参数为空的时候，不进行查询过滤
博客详情/api/blog/detail  get    id
新建博客/api/blog/new     post
删除博客/api/blog/delete  post   id
修改博客/api/blog/update  post   id

## 链接数据库
https://dev.mysql.com/downloads/file/?id=511482 下载mysql
root password  983663152

##
show databases // 查询所有数据库
CREATE SCHEMA `myblog` ;// 创建数据库
CREATE TABLE `myblog`.`users` ( // 创建表
  `id` INT NOT NULL AUTO_INCREMENT, // 创建字段id int 不为null 自增
  `username` VARCHAR(20) NOT NULL, // 创建字段username varchar 长度20 不为空
  `password` VARCHAR(20) NOT NULL,
  `realname` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`)); // 主键id

增删改查
use myblog;
-- show tables;显示myblog的所有的表格 ，--注释
insert into users(username, `password`, realname) values ('shangsan','123','张三') // 插入数据，`xx`xx不是关键字
select * from users;查询所有的列
select id,username from users;查询id,username列
select * from users where username='zhangsan';条件查询
select * from users where username='zhangsan' and `password`='123';
select * from users where username='zhangsan' or `password`='123';
select * from users where username like '%zhang%'; 模糊查询
select * from users where password like '%1%' order by id desc; 查询且倒序排序，默认正序
更新
update users set realname='李四2' where username='lisi'; 将lisi修改为李四2
SET SQL_SAFE_UPDATES = 0;  关闭安全模式
删除
delete from users where username='lisi';
delete from users where username<>'lisi'; 不等于<>

select version()查看mysql版本

## 登录
cookie和session
session写入redis
mysql是硬盘数据库，redis是内存数据库
cookie:存储在浏览器上的一段字符串，格式：k1=v1;k2=v2;k3=v3

每次发送http请求，会将请求域的cookie一起发送给server
server可以修改cookie并返回给浏览器
浏览器中也可以通过js修改cookie(有限制)

server端nodejs操作cookie
查看cookie
修改cookie
实现登录验证





