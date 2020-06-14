/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 14:09:17
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 14:26:55
 * @Description: 编译出logo
 */ 
const fs = require('fs')
const readline = require('readline');
const path = require('path')

const input = fs.createReadStream(path.join(process.cwd(), 'assets', 'logo'))

const rl = readline.createInterface({
  input: input
});

let logo = []

async function processLine(rl) {
  for await(let l of rl) {
    logo.push(l)
  }
  fs.writeFile(path.join(process.cwd(), 'bin', 'helper', 'logo.js'), `
    module.exports = ${JSON.stringify(logo)}
  `, (err) => {
    if (err) throw err
  })
}

processLine(rl)
