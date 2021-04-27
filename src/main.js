#!/usr/bin/env node

const readline = require('readline')
const chalk = require('chalk')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const log = console.log

rl.question(`${chalk.blue('您需要构建')} ${chalk.red('uni-app')} ${chalk.blue('路由吗?')} ${chalk.red('y/n')}: `, flag => {
  log(flag)
  if (flag === 'y') {
    require('./remake')
    log(chalk.green('如您所愿~'))
  } else {
    log(chalk.green('取消构建'))
  }
  rl.close()
})