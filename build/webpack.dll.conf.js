const path = require('path');
const {
  DllPlugin,
  ContextReplacementPlugin
} = require('webpack');
const {
  resolve
} = require('./helpers');

module.exports = {
  context: process.cwd(),

  entry: {
    'polyfills': ['./src/polyfills.ts'],
    'vendor': ['./src/vendor.ts']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../lib/library'),
    library: '[name]'
  },
  devtool: '#source-map',
  plugins: [
    new DllPlugin({
      path: path.join(__dirname, '../lib', '[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
    new ContextReplacementPlugin(/angular(\\|\/)core/, resolve('src'))
  ]
};
