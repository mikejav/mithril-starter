var path = require('path')

module.exports = {
    build: {
        srcDir: path.resolve(__dirname, '../src'),
        distDir: path.resolve(__dirname, '../dist'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/'
    },
    dev: {
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/'
    }
}
