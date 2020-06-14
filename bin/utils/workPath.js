/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 17:22:21
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 17:22:40
 * @Description: 
 */ 
const path = require('path')

// helper目录
const CONFIGPATH = path.join(process.cwd(), 'bin', 'config')

module.exports = {
  CONFIGPATH
}