var merge = require('webpack-merge'),
    webpack = require('webpack'),
    baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})
