#!/usr/bin/env node
const chalk = require('chalk')
const path = require('path')

// 打印logo
const logo = require('./bin/config/logo')
console.log(chalk.red(logo.join('\n')));

// 执行avgs校验方法 及获取avgs参数
// const { cmdName, avgs, options } = require('./bin/args')
const getArgs = require('./bin/args')
getArgs().then(({ cmdName, args, options }) => {
  const cmd = require(path.join(__dirname, 'bin', cmdName))
  cmd.run({ args, options })
})


