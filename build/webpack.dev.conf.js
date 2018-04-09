const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const EvalSourceMapDevToolPlugin = require('webpack/lib/EvalSourceMapDevToolPlugin');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf.js');
const { root, absolutPath } = require('./helpers');
const { dev } = require('../config');
const postCSS = absolutPath('../postcss.config');

const ENV = (process.env.NODE_ENV = dev.env.NODE_ENV);
const APP_CONFIG = {
  API_URL: 'dev.api.local'
};
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(
    baseWebpackConfig.entry[name]
  );
  console.log(`Esto es el name: ${name}`);
});

module.exports = webpackMerge(baseWebpackConfig, {
  module: {
    rules: [
      // extraer en funcion la generacion de loaders. Se quita CSS, habilitar cuando esté postCSS
      /**
       * Css loader support for *.css files (styles directory only)
       * Loads external css styles into the DOM, supports HMR
       *
       */
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: false } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              config: {
                path: postCSS
              }
            }
          }
        ],
        include: [root('src', 'styles')]
      },

      /**
       * Sass loader support for *.scss files (styles directory only)
       * Loads external sass styles into the DOM, supports HMR
       *
       */
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: false } },
          { loader: 'css-loader', options: { sourceMap: false } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              config: {
                path: postCSS
              }
            }
          },
          { loader: 'sass-loader', options: { sourceMap: false } }
        ],
        include: [root('src', 'styles')]
      }
    ]
  },

  plugins: [
    /** Alternativa a devtool: https://webpack.js.org/plugins/eval-source-map-dev-tool-plugin/ */
    // new EvalSourceMapDevToolPlugin({
    //   moduleFilenameTemplate: '[resource-path]',
    //   sourceRoot: 'webpack:///',
    //   exclude: ['vendor.ts', 'pollyfills.ts']
    // }),
    new ExtractTextPlugin('[name].css'),

    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
  ],
  // cheap-module-eval-source-map is faster for development
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: '#cheap-module-eval-source-map'
});
