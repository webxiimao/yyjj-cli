#!/usr/bin/env node
const path = require('path')

const log = require('./bin/utils/log')

log.printLogo()

// 执行avgs校验方法 及获取avgs参数
// const { cmdName, avgs, options } = require('./bin/args')
const getArgs = require('./bin/args')
getArgs().then(({ cmdName, args, options }) => {
  const cmd = require(path.join(__dirname, 'bin', cmdName))
  cmd.run({ args, options })
})


