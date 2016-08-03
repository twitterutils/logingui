var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/scripts/testBundle.jsx',
  output: {
    path: BUILD_DIR,
    filename: '/scripts/testBundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
