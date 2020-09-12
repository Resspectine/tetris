const path = require('path');

const webpack = require('webpack');
const addReactDisplayname = require('babel-plugin-add-react-displayname');

const commonConfig = require('./webpack.common.js');

module.exports = {
  ...commonConfig,
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    stats: {
      all: false,
      modules: false,
      timings: true,
      errors: true,
      warnings: true,
    },
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: 'src',
      manifest: require(path.resolve('dist', 'vendors/vendors-manifest.json')),
      name: 'vendors',
    }),
    addReactDisplayname,
  ],
};
