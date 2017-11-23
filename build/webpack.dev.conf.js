var merge = require('webpack-merge'),
    webpack = require('webpack'),
    baseWebpackConfig = require('./webpack.base.conf'),
    config = require("../config"),
    path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(config.build.srcDir, config.dev.assetsSubDirectory)
            }
        ])
    ]
})
