var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseWebpackConfig = require('./webpack.base.conf.js');
var helpers = require('./helpers');
const config = require('../config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const ENV = (process.env.NODE_ENV = config.dev.env.NODE_ENV);
const APP_CONFIG = {
  API_URL: 'dev.api.local'
};
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(
    baseWebpackConfig.entry[name]
  );
});

module.exports = webpackMerge(baseWebpackConfig, {
  
  module: {
    rules: [
      // SASS loader and inject into components
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        use: ['raw-loader', 'sass-loader']
      },
      // SASS global which not include in components
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        use: ExtractTextPlugin.extract({
          use: ['raw-loader', 'sass-loader']
        })
      }
    ]
  },
  
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: config.dev.env,
        APP_CONFIG: JSON.stringify(APP_CONFIG)
      }
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ],
  // cheap-module-eval-source-map is faster for development
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: '#cheap-module-eval-source-map',
});
