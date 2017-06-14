process.env.NODE_ENV = 'production'

var md = require('mkdirp')
var rm = require('rimraf')
var ncp = require('ncp').ncp
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

// wipe dist directory for clean build and then run webpack
// remove distDir
rm(path.join(config.build.distDir), err => {
    if (err) throw err

    // create distDir
    md(path.join(config.build.distDir), err => {
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
