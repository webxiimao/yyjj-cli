/*
 * @Author: maoyuyu
 * @Date: 2020-06-13 23:28:11
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 18:26:26
 * @Description: 
 */

// const cp = require('child_process')

const { isCwdPathExist, cwdMkdir } = require('./utils/pathUtils')

function run({ args, options }) {
  // TODO 下载项目
  console.log('options', options);
  console.log('args', args);
  const [ projectName ] = args
  cwdMkdir(projectName)
}

 module.exports = {
   run
 }