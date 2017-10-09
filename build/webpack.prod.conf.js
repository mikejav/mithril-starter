var merge = require('webpack-merge'),
    webpack = require('webpack'),
    baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        })
    ]
})
