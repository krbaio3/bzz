// module.exports = require('./config/webpack.dev.conf.js');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts']
  },
  entry: {
    // polyfills: './src/polyfills.ts',
    // vendor: './src/vendor.js',
    main: './src/main.css'
  },
  output: {
    path: path.resolve(__dirname, 'src'), // output directory
    filename: '[name].css' // name of the generated bundle
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   exclude: /node_modules/,
      //   loader: 'html-loader'
      // },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   loader: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: [
      //     'exports-loader?module.exports.toString()',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: false,
      //         import: false
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
  //     {
  //       test: /\.ts$/,
  //       exclude: /node_modules/,
  //       loaders: [
  //         'awesome-typescript-loader',
  //         'angular2-template-loader?keepUrl=true'
  //       ]
  //     },
  //     {
  //       test: /\.ts$/,
  //       exclude: /node_modules/,
  //       enforce: 'pre',
  //       loader: 'tslint-loader'
  //     }
  //     // {
  //     //   test: /\.scss$/,
  //     //   loader: [
  //     //     'style-loader',
  //     //     'css-loader?sourceMap',
  //     //     'raw-loader',
  //     //     'sass-loader?sourceMap'
  //     //   ]
  //     // },
    ]
  },
  // devtool: 'source-map',
  // devServer: {
  //   historyApiFallback: true
  // },
  plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'src/index.html',
  //     inject: 'body'
  //   }),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor'
  //   }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    })
  ]
};
