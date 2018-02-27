const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.base.conf');
const helpers = require('./helpers');

const ENV = (process.env.NODE_ENV = process.env.ENV = 'development');
const APP_CONFIG = {
  API_URL: 'dev.api.local'
};

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV),
        APP_CONFIG: JSON.stringify(APP_CONFIG)
      }
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
