process.env.NODE_ENV = 'development'

var opn = require('opn'),
    path = require('path'),
    webpack = require('webpack'),
    webpackDevServer = require('webpack-dev-server'),
    config = require('../config'),
    webpackConfig = require('./webpack.dev.conf')


var compiler = webpack(webpackConfig)

var server = new webpackDevServer(compiler, {
    clientLogLevel: "none",
    contentBase: config.build.distDir,
    publicPath: "http://localhost:" + config.dev.port + config.dev.assetsPublicPath,
    historyApiFallback: true,
    noInfo: true,
    port: config.dev.port,
    watchContentBase: true
})

server.listen(config.dev.port, "127.0.0.1", function () {
    console.log(`Project is running at http://localhost:${config.dev.port}`)

    if (config.dev.autoOpenBrowser) {
        opn('http://localhost:' + config.dev.port)
    }
})
