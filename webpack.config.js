var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['./src/index'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'main.js',
    },
    devServer: {
        hot: true,
        contentBase: './public',
        watchContentBase: true
    },
    module: {
      rules: [
              {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
              },
              { 
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" 
              }
              ]
            },
            externals: {
              jquery: 'jQuery'
            }
   
    } 