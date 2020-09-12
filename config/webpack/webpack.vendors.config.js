const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [path.resolve('src', 'vendors.js')],
  output: {
    path: path.resolve('dist', 'vendors'),
    filename: 'vendors.js',
    library: 'vendors',
  },
  devtool: 'source-map',
  stats: 'errors-only',
  plugins: [
    new webpack.DllPlugin({
      context: 'src',
      path: path.resolve('dist', 'vendors/vendors-manifest.json'),
      name: 'vendors',
    }),
  ],
};
