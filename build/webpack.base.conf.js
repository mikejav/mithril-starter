var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var utils = require('./utils')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var webpack = require('webpack')
var config = require('../config')

module.exports = {
    context: config.build.srcDir,
    entry: {
        default: './main.js',
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].[hash].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            config.build.srcDir,
            path.resolve(__dirname, "../node_modules")
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [config.build.srcDir],
                options: {
                    presets: ['es2015'],
                    "plugins": [
                        ["transform-react-jsx", {
                            "pragma": "m"
                        }]
                    ]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                sourceMap: process.env.NODE_ENV === 'development'
                            }
                        }, {
                            loader: "sass-loader"
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].[contenthash].css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: process.env.NODE_ENV === 'production'
                ? {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true
                    // more options:
                    // https://github.com/kangax/html-minifier#options-quick-reference
                }
                : false
            ,
            showErrors: process.env.NODE_ENV === 'development'
        }),
        new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        })

    ]
}
