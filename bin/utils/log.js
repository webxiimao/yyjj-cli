/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 18:24:35
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 18:29:28
 * @Description: 
 */ 

const chalk = require('chalk')
// 打印logo
const logo = require('../config/logo')

module.exports = {
  error: msg => console.log(chalk.red(`错误：${msg}`)),
  printLogo: _ => console.log(chalk.red(logo.join('\n')))
}