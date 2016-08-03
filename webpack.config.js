var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/scripts/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: '/scripts/bundle.js'
  }
};

module.exports = config;
