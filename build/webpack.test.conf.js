const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ContextReplacementPlugin, DefinePlugin } = require('webpack');

const config = require('../config');
const helpers = require('./helpers');
const ENV = (process.env.NODE_ENV = config.dev.env.NODE_ENV);
const APP_CONFIG = {
  API_URL: 'test.api.local'
};

module.exports = {
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          /**
           * These packages have problems with their sourcemaps
           */
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular')
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            query: {
              /**
               * Use inline sourcemaps for "karma-remap-coverage" reporter
               */
              sourceMap: false,
              inlineSourceMap: true,
              compilerOptions: {
                /**
                 * Remove TypeScript helpers to be injected
                 * below by DefinePlugin
                 */
                removeComments: true
              }
            }
          },
          'angular2-template-loader'
        ],
        exclude: [/\.e2e\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        ENV,
        APP_CONFIG: JSON.stringify(APP_CONFIG)
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      showErrors: true,
      title: 'Webpack App',
      path: path.join(__dirname, '../dist/'),
      hash: true
    }),
    new ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      path.resolve(__dirname, '../src')
    )
  ]
};
