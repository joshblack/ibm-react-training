'use strict';

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

module.exports = {
  devtool: 'inline-source-map',

  entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
    if (isDirectory(path.join(__dirname, dir)))
      entries[dir] = path.join(__dirname, dir, 'app.js');

    return entries;
  }, {}),

  output: {
    path: 'examples/build',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
