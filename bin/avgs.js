/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 02:04:12
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 12:34:16
 * @Description: 
 */ 

const fs = require('fs')
const path = require('path')
const { program } = require('commander');

const packageJson = fs.readFileSync(path.join(process.cwd(), 'package.json'))
const version = JSON.parse(packageJson.toString()).version

console.log(process.argv);


program.version(version)
  .description('yyjj-cli')
  // .option('-p, --port <port>', 'specify a port')
  // .option('-h, --help', 'more information on a command')
  .command('create [name]', 'create a new app').alias('i')
 
program.parse(process.argv);
const avgs = program.opts()

const cmdName = "create"

module.exports = {
  cmdName,
  avgs
}