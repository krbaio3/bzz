var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var helpers = require('./helpers');
const utils = require('./utils');
const config = require('../config');


module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:
      // process.env.NODE_ENV === 'production'
      //   ? config.build.assetsPublicPath
      //   :
      config.dev.assetsPublicPath,
    chunkFilename: '[id].chunk.js'
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
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'image-webpack-loader',
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: 'pre'
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
          limit: 10 * 1024,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      // static assets
      // {
      // test: /\.(png|jpe?g|gif)(\?.*)?$/,
      // loader: 'file-loader',
      // options: {
      // publicPath: 'assets/',
      // outputPath: 'images/'
      // }
      // },
      // {
      //   // test: /\.(gif|png|jpe?g|svg)$/i,
      //   test: /\.\/src\/assets/,
      //   use: [
      //     'file-loader',
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //           quality: 65
      //         },
      //         // optipng.enabled: false will disable optipng
      //         optipng: {
      //           enabled: false
      //         },
      //         pngquant: {
      //           quality: '65-90',
      //           speed: 4
      //         },
      //         gifsicle: {
      //           interlaced: false
      //         },
      //         // the webp option will enable WEBP
      //         webp: {
      //           quality: 75
      //         }
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          // Images larger than 10 KB won’t be inlined
          limit: 10 * 1024,
          // Remove quotes around the encoded URL –
          // they’re rarely useful
          noquotes: true
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
      // si no separamos en app y vendor, cada vez que usamos una libreria de terceros, copia y pega el codigo, esto optimiza lo repetido en un vendor
      // todo el codigo comun lo quita y lo pone en vendor
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
