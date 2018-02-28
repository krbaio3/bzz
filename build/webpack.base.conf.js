var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var helpers = require('./helpers');
const utils = require('./utils');

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': helpers.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        enforce: 'pre',
        include: [helpers.resolve('src'), helpers.resolve('test')],
        options: {
          // automatically fix linting errors
          fix: true,
          // can specify a custom tsconfig file relative to current directory or with absolute path
          // to be used with type checked rules
          tsConfigFile: 'tsconfig.json',
          // name of your formatter (optional)
          formatter: 'grouped',
          // path to directory containing formatter (optional)
          formattersDirectory:
            'node_modules/custom-tslint-formatters/formatters'
        }
      },
      // angular2 typescript loader
      {
        test: /\.ts$/,
        exclude: /(node_modules | config | build)/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useWebpackText: true,
              useCache: true,
              // babelCore: 'babel-core'
              babelCore: '@babel/core'
              // babelOptions: {
              //   plugins: [
              //     // '@babel/plugin-transform-runtime',
              //     'transform-runtime'
              //   ]
              // }
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ]
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules | config | build)/,
        use: [
          {
            loader: 'angular-router-loader'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules | config | build)/,
        loader: 'babel-loader',
        include: [helpers.resolve('src'), helpers.resolve('test')]
      },
      // html loader
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
      // static assets
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // extraer en funcion la generacion de loaders. Se quita CSS, habilitar cuando esté postCSS
      // css global which not include in components
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
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      }
    ]),

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core/,
      helpers.resolve('src')
    ),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    })
  ]
};
