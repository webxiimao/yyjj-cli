/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 16:21:50
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 16:55:33
 * @Description: 
 */ 

const inquirer = require('inquirer')

module.exports = (questions) => {
  return inquirer.prompt([
    questions
  ])
}