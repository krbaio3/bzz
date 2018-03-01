const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf.js');
const helpers = require('./helpers');
const config = require('../config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const EvalSourceMapDevToolPlugin = require('webpack/lib/EvalSourceMapDevToolPlugin');
const ngcWebpack = require('ngc-webpack');

const ENV = (process.env.NODE_ENV = config.dev.env.NODE_ENV);
const APP_CONFIG = {
  API_URL: 'dev.api.local'
};
const isProd = ENV == 'production';
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(
    baseWebpackConfig.entry[name]
  );
});

module.exports = webpackMerge(baseWebpackConfig, {
  output: {

      /**
       * The output directory as absolute path (required).
       *
       * See: http://webpack.github.io/docs/configuration.html#output-path
       */
      path: helpers.root('dist'),

      /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: http://webpack.github.io/docs/configuration.html#output-filename
       */
      filename: '[name].bundle.js',

      /**
       * The filename of the SourceMaps for the JavaScript files.
       * They are inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
       */
      sourceMapFilename: '[file].map',

      /** The filename of non-entry chunks as relative path
       * inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
       */
      chunkFilename: '[id].chunk.js',

      library: 'ac_[name]',
      libraryTarget: 'var',
    },
  module: {
    rules: [
      // // extraer en funcion la generacion de loaders. Se quita CSS, habilitar cuando esté postCSS
      // // css global which not include in components
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('src', 'app'),
      //   use: ExtractTextPlugin.extract({
      //     use: ['raw-loader', 'css-loader']
      //   })
      // },
      // // css loader and inject into components
      // {
      //   test: /\.css$/,
      //   include: helpers.root('src', 'app'),
      //   loader: 'raw-loader'
      // },
      // // SASS loader and inject into components
      // {
      //   test: /\.scss$/,
      //   include: helpers.root('src', 'app'),
      //   use: ['raw-loader', 'sass-loader']
      // },
      // // SASS global which not include in components
      // {
      //   test: /\.scss$/,
      //   exclude: helpers.root('src', 'app'),
      //   use: ExtractTextPlugin.extract({
      //     use: ['raw-loader', 'sass-loader']
      //   })
      // }

      /**
       * Css loader support for *.css files (styles directory only)
       * Loads external css styles into the DOM, supports HMR
       *
       */
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [helpers.root('src', 'styles')]
      },

      /**
       * Sass loader support for *.scss files (styles directory only)
       * Loads external sass styles into the DOM, supports HMR
       *
       */
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [helpers.root('src', 'styles')]
      }
    ]
  },

  plugins: [
    new EvalSourceMapDevToolPlugin({
      moduleFilenameTemplate: '[resource-path]',
      sourceRoot: 'webpack:///'
    }),
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
      // template: 'src/index.html',
      template: 'index.html',
      inject: 'body',
      xhtml: true,
      minify: isProd
        ? {
            caseSensitive: true,
            collapseWhitespace: true,
            keepClosingSlash: true
          }
        : false
    }),
    new FriendlyErrorsPlugin()
  ],
  // cheap-module-eval-source-map is faster for development
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: '#cheap-module-eval-source-map'
});
