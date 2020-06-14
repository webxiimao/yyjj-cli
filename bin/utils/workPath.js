/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 17:22:21
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 18:25:24
 * @Description: 
 */ 
const path = require('path')
// 根目录
const { ROOTPATH } = require('../../config')
// config目录
const CONFIGPATH = path.join(ROOTPATH, 'bin', 'config')

module.exports = {
  ROOTPATH,
  CONFIGPATH,
}