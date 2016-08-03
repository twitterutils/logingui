var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: {
    testBundle: path.join(APP_DIR, '/scripts/testBundle/index.jsx'),
    feed: path.join(APP_DIR, '/scripts/feed/index.jsx')
  },
  output: {
    path:  path.join(BUILD_DIR, "scripts/"),
    filename: '[name].js'
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
