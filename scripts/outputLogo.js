/*
 * @Author: maoyuyu
 * @Date: 2020-06-14 14:09:17
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-14 17:43:39
 * @Description: 编译出logo
 */ 
const fs = require('fs')
const readline = require('readline');
const path = require('path')
const { CONFIGPATH } = require('./workPath')

const input = fs.createReadStream(path.join(CONFIGPATH, 'assets', 'logo'))

const rl = readline.createInterface({
  input: input
});

let logo = []

async function processLine(rl) {
  for await(let l of rl) {
    logo.push(l)
  }
  fs.writeFile(path.join(CONFIGPATH, 'bin', 'helper', 'logo.js'), `
    module.exports = ${JSON.stringify(logo)}
  `, (err) => {
    if (err) throw err
  })
}

processLine(rl)
