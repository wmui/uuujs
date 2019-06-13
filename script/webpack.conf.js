const path = require('path')
const rootPath = path.resolve(__dirname, '../')

// let files = {};

// const r = require.context('../src', true, /^\.\/.+\/.+\.js$/);
// r.keys().forEach(key => {
//     let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
//     files[attr] = r(key);
// });
const config = {
    mode: 'production',
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: 'uuu.min.js',
        path: path.resolve(rootPath, 'dist'),
        library: 'uuujs',
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
}

module.exports = config
