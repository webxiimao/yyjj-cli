#!/usr/bin/env node
/*
 * @Author: maoyuyu
 * @Date: 2020-06-13 20:03:52
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 12:40:33
 * @Description: 入口文件
 */ 
const path = require('path')
// 执行avgs校验方法 及获取avgs参数
const { cmdName, avgs } = require('./bin/avgs')
// require('./init.js')
// require('./dev-server.js')
// require('./mock.js')
// require('./build.js')
// require('./add.js')

// yyjj init myproject
// 1.解析 init 命令  -> 通用的getAvgs(avg.js)方法 得到命令参数
// 2.执行 init.js require('./init')

const cmd = require(path.join(__dirname, 'bin', cmdName))

cmd.run(avgs)
