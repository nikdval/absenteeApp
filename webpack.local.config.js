var path = require("path")
var webpack = require('webpack')
var config = require('./webpack.config.js')

var ip = '127.0.0.1'
var config = require('./webpack.config.js')
config.entry = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
}

module.exports = config