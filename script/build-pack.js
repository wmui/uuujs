const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const rootPath = path.resolve(__dirname, '../')

let building = ora('building...')
building.start()
rm(path.resolve(rootPath, 'dist', 'uuu.min.js'), err => {
    if (err) throw (err)
    webpack({
        mode: 'production',
        entry: path.resolve(rootPath, 'src', 'index.js'),
        output: {
            filename: 'uuu.min.js',
            path: path.resolve(rootPath, 'dist'),
            library: 'uuu',
            libraryTarget: "umd",
            globalObject: "this"
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ['env'],
                }
            }]
        }
    }, function (err, stats) {
        if (err) throw (err)
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        console.log(chalk.cyan('  Build complete.\n'))
        building.stop()
    })
})
