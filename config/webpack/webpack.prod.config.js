const path = require('path');

const addReactDisplayname = require('babel-plugin-add-react-displayname');

const commonConfig = require('./webpack.common.js');

module.exports = {
  ...commonConfig,
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
  },
  node: {
    fs: 'empty',
  },
  optimization: {
    sideEffects: false,
  },
  plugins: [addReactDisplayname],
};
