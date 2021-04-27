const path = require('path')
const fs = require('fs')
const config = require('./config')

const rawdata = fs.readFileSync(config.input)
const readPagesStr = rawdata.toString().replace(/\/\/.*/g, '')
const readPages = JSON.parse(readPagesStr)

const { pages, subPackages } = readPages

// 重做路由
pages.map(item => item.path = '/' + item.path)
const router = pages
subPackages.forEach(item => {
  item.pages.forEach(subItem => {
    const _path = '/' + item.root + '/' + subItem.path
    router.push({
      ...subItem,
      path: _path
    })
  })
})

const data = JSON.stringify(router, null, 2)

const checkDirExist = folderpath => {
  const pathArr = folderpath.split('/')
  let _path = '.'
  pathArr.forEach((item, index) => {
    if (index === 0 || index === pathArr.length - 1) return
    _path += `/${item}`
    if (!fs.existsSync(path.resolve(_path))) {
      fs.mkdirSync(_path)
    }
  })
}
checkDirExist(config.output)

fs.writeFileSync(path.resolve(config.output), data)