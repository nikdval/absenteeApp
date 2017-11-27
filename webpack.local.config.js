var path = require("path")
var webpack = require('webpack')
var config = require('./webpack.config.js')

var ip = '127.0.0.1'
var config = require('./webpack.config.js')
config.entry = {
    Home:[
        'webpack-dev-server/client?http://' + ip + ':3000',
        'webpack/hot/only-dev-server',
        './client/src/index.js',
    ]
}

config.output.publicPath = 'http://' + ip + ':3000' + '/client/dist/js/'
module.exports = config