process.env.NODE_ENV = 'production'

var md = require('mkdirp'),
    rm = require('rimraf'),
    ncp = require('ncp').ncp,
    path = require('path'),
    webpack = require('webpack'),
    config = require('../config'),
    webpackConfig = require('./webpack.prod.conf')

// wipe dist directory for clean build and then run webpack
// remove distDir
rm(config.build.distDir, err => {
    if (err) throw err

    // create distDir
    md(config.build.distDir, err => {
        if (err) throw err

        // copy files from srcDir/static to distDir
        ncp(path.join(config.build.srcDir, "static"), config.build.distDir, err => {
            if (err) throw err

            webpack(webpackConfig, (err, stats) => {
                if (err) throw err

                console.log(stats.toString({
                    colors: true,
                    modules: false,
                    children: false,
                    chunks: false,
                    chunkModules: false
                }) + '\n\n')
            })
        })
    })
})
