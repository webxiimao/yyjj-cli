/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 18:03:15
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 18:29:46
 * @Description: 
 */ 
const path = require('path')
const fs = require('fs')
const { ROOTPATH } = require('./workPath')
const log = require('./log')

const isCwdPathExist = (name) => {
  return isExist(path.join(process.cwd(), name))
}

const isExist = (path) => {
  return fs.existsSync(path)
}

const mkdir = (path) => {
  if (isExist(path)) {
    log.error(`${path}目录不是一个空目录`)
    return
  } else {
    return fs.mkdirSync(path)
  }
}

const cwdMkdir = (name) => {
  return mkdir(path.join(process.cwd(), name))
}

module.exports = {
  isExist,
  isCwdPathExist,
  mkdir,
  cwdMkdir
}