var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
     entry: path.join(__dirname, '/client/src/index.js'),
    // entry: {
    //     Home:[
    //     'webpack-dev-server/client?http://127.0.0.1:8080/',
    //     'webpack/hot/only-dev-server',
    //     './client/src/index.js'
    // ]},

    output: {
        path: path.join(__dirname, '/client/dist/js'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    include: path.join(__dirname, '/client/src'),
                    loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
                },
                {
                    test: /\.scss$/,
                    loaders: ['style', 'css', 'sass']
                }    
        ]
    },
 
    watch: true
};
