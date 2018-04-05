const { HashedModuleIdsPlugin, DefinePlugin } = require('webpack');
const { UglifyJsPlugin } = require('webpack').optimize;
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf.js');
const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
const { root, absolutPath } = require('./helpers');
const {build, dev} = require('../config');
const { getUglifyOptions } = require('./utils');
const postCSS = absolutPath('../postcss.config');

const ENV =
  process.env.NODE_ENV == 'production'
    ? build.env.NODE_ENV
    : dev.env.NODE_ENV;
console.log('ENV ===> ', ENV);
console.log('process.env.NODE_ENV ===> ', process.env.NODE_ENV);
const APP_CONFIG = {
  API_URL: 'prod.api.local'
};

module.exports = webpackMerge(baseWebpackConfig, {
  module: {
    rules: [
      /**
       * Extract CSS files from .src/styles directory to external CSS file
       */
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: postCSS
                }
              }
            }
          ]
        }),
        include: [root('src', 'styles')]
      },

      /**
       * Extract and compile SCSS files from .src/styles directory to external CSS file
       */
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: postCSS
                }
              }
            },
            { loader: 'resolve-url-loader' },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        }),
        include: [root('src', 'styles')]
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    /**
     * Plugin: UglifyJsPlugin
     * Description: Minimize all JavaScript output of chunks.
     * Loaders are switched into minimizing mode.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
     *
     * NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
     */
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: getUglifyOptions,
      // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),

    new PurifyPlugin() /* buildOptimizer */,

    new HashedModuleIdsPlugin({
      hashFunction: 'md5',
      hashDigest: 'base64',
      hashDigestLength: 20
    }),
    //Dependencias Cíclicas. Analizar cómo se hacen el import de dependencias desde Module hasta los servicios
    // new webpack.optimize.ModuleConcatenationPlugin(),

    new DefinePlugin({
      'process.env': {
        ENV: build.env,
        APP_CONFIG: JSON.stringify(APP_CONFIG)
      }
    })
  ]
});
