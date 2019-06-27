const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const copy = require('copy')
const webpack = require('webpack')
const rootPath = path.resolve(__dirname, '../')

let copying = ora('copying...')
copying.start()
rm(path.resolve(rootPath, 'dist/copy', `*.js`), err => {
    if (err) throw (err)
    let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
    folderList.forEach((item, index) => {
        copy(`src/${item}/*.js`, `${rootPath}/dist/copy`, function (err, files) {
            if (err) throw err;
            if (index === folderList.length - 1) {
                console.log(chalk.cyan('  Copy complete.\n'))
                copying.stop()
            }
        })
    })
})
