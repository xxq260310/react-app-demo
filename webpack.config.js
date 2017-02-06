'use strict';
var path = require('path')
var webpack = require('webpack')
var node_module_dir = path.resolve(__dirname, '/node_module')
// let [env] = [process.env.NODE_ENV];
var env = process.env.NODE_ENV;

module.exports = {
    entry: [
        'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:9292', path.resolve(__dirname, 'react-app/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                loader: "babel-loader", //加载babel模块
                include: [path.resolve(__dirname, 'react-app')],
                exclude: [node_module_dir],
                test: /\.jsx?$/,
                // query: {
                //     plugins: ['transform-runtime'],
                //     presets: ['es2015', 'stage-2', 'react']
                // }
            }, {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'react-app')],
                loader: 'style-loader!css-loader?modules&localIdentName=_[local]_[hash:base64:5]'
            }, {
                test: /\.jsx?$/,
                loader: "eslint-loader",
                include: [path.resolve(__dirname, 'react-app')],
                exclude: [node_module_dir]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
