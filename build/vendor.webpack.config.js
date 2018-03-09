const path = require('path');
const webpack = require('webpack');

console.log('Entra en vendor.webpack.config.js');

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [__dirname, 'node_modules']
  },

  entry: {
    vendor: [path.resolve(__dirname, '../src/vendor.ts')]
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist/library'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve('dist', '[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
};
