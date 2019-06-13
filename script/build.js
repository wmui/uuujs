const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const copy = require('copy')
const webpack = require('webpack')

const config = require('./webpack.conf')
const rootPath = path.resolve(__dirname, '../')

let building = ora('building...')
building.start()
rm(path.resolve(rootPath, 'dist', `*.js`), err => {
    if (err) throw (err)
    webpack(config, function (err, stats) {
        if (err) throw (err)
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        console.log(chalk.cyan('  Build complete.\n'))
    })
    let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
    folderList.forEach((item, index) => {
        copy(`src/${item}/*.js`, `${rootPath}/dist`, function (err, files) {
            if (err) throw err;
            if (index === folderList.length - 1) {
                console.log(chalk.cyan('  Copy complete.\n'))
                building.stop()
            }
        })
    })
})
