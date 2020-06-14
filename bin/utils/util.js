/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 16:50:34
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 17:24:50
 * @Description: 
 */


const fs = require('fs')
const path = require('path')
const { CONFIGPATH } = require('./workPath')
/**
 * 获取cmd 命令 对应的config 目录或者文件
 * @param {*} cmdName 目录名
 */
const getConfigDirFile = function (cmdName) {
  let configDir
  try {
    configDir = fs.readdirSync(path.join(CONFIGPATH, cmdName))
  } catch (err) {
    // 不处理
  }
  return configDir
}

module.exports = {
  getConfigDirFile
}