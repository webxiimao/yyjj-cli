#!/usr/bin/env node
const chalk = require('chalk')
const path = require('path')
// 执行avgs校验方法 及获取avgs参数
const { cmdName, avgs } = require('./bin/args')
// require('./init.js')
// require('./dev-server.js')
// require('./mock.js')
// require('./build.js')
// require('./add.js')

// yyjj init myproject
// 1.解析 init 命令  -> 通用的getAvgs(avg.js)方法 得到命令参数
// 2.执行 init.js require('./init')

// 打印logo
const logo = require('./bin/helper/logo')
console.log(chalk.red(logo.join('\n')));

const cmd = require(path.join(__dirname, 'bin', cmdName))

cmd.run(avgs)
