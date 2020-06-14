/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 02:04:12
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 17:50:37
 * @Description: 
 */ 

const fs = require('fs')
const path = require('path')
const { program } = require('commander');
// const inquirer = require('inquirer')
const inquirerContext = require('./utils/inquirerContext')
const { getConfigDirFile } = require('./utils/util')
const { ROOTPATH } = require('./utils/workPath')

const packageJson = fs.readFileSync(path.join(ROOTPATH, 'package.json'))
const version = JSON.parse(packageJson.toString()).version

// console.log(process.argv);
program.version(version)
  .description('yyjj-cli')
  .option('-p, --port <port>', 'specify a port')
  .option('-h, --help', 'more information on a command')
  .command('init <name>').description('初始化一个新项目')

program
  .command('add <path>').description('新建页面或者模块')
 
program.parse(process.argv);
let options = program.opts()

const [ cmdName, ...args ] = program.args

const questionsForCmd = {
  'init': '请选择要创建的项目'
}

const getArgs = async () => {
  const configDir = getConfigDirFile(cmdName)

  if (configDir) {
    const answers = await inquirerContext({
      type: 'list',
      name: 'type',
      message: questionsForCmd[cmdName],
      choices: configDir.map(v => ({ name: v.split('.')[0], value:v.split('.')[0] }))
    })
    options = Object.assign(answers, options)
  }
  return {
    cmdName,
    args,
    options
  }
}

module.exports = getArgs