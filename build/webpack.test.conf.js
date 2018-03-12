'use strict'

// Webpack for testing

const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const webpackBaseConfig = require('./webpack.base.conf')

const webpackConfig = merge(webpackBaseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ]
})

delete webpackConfig.entry

module.exports = webpackConfig
