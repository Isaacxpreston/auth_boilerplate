var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module : {
    loaders : [
      {
        test: /\.scss$/,
        //include: path.join(__dirname, 'client/app'),
        loaders: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(ttf|svg|eot|pdf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test : /\.jsx?/,
        include : path.join(__dirname, 'client/app'),
        loader : 'babel-loader'
      },
    ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};

module.exports = config;