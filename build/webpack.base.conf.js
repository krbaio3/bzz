const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ngcWebpack = require('ngc-webpack');
const path = require('path');
const helpers = require('./helpers');
const utils = require('./utils');
const config = require('../config');
const builder = require('./builder');

console.log(`Variable de entorno: ${config.dev.env.NODE_ENV}`);
const ngcWebpackConfig = utils.ngcWebpackSetup(
  config.dev.env.NODE_ENV == 'production',
  builder.METADATOS
);

Object.assign(ngcWebpackConfig.plugin, {
  tsConfigPath: builder.METADATOS.tsConfigPath,
  mainPath: builder.entry.main
});

module.exports = {
  entry: builder.entry,
  // output: builder.output,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    // Indicamos el alias para que al hacer el import, sepa dónde tiene que ir a buscar
    // alias: {
    //   '@': helpers.resolve('src')
    // },
    /**
     * Indique a webpack qué directorios se deben buscar al resolver módulos.
     *
     * See: https://webpack.js.org/configuration/resolve/#resolve-modules
     */
    modules: [helpers.root('src'), helpers.root('node_modules')]
  },
  module: {
    rules: [
      // Trocear loaders en PRE
      // {
      //   test: /\.tsx?$/,
      //   loader: 'tslint-loader',
      //   enforce: 'pre',
      //   include: [helpers.resolve('src'), helpers.resolve('test')],
      //   options: {
      //     // automatically fix linting errors
      //     fix: true,
      //     // can specify a custom tsconfig file relative to current directory or with absolute path
      //     // to be used with type checked rules
      //     tsConfigFile: 'tsconfig.json',
      //     // name of your formatter (optional)
      //     formatter: 'grouped',
      //     // path to directory containing formatter (optional)
      //     formattersDirectory:
      //       'node_modules/custom-tslint-formatters/formatters'
      //   }
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'image-webpack-loader',
      //   // Specify enforce: 'pre' to apply the loader
      //   // before url-loader/svg-url-loader
      //   // and not duplicate it in rules with them
      //   enforce: 'pre'
      // },
      ...ngcWebpackConfig.loaders,
      // angular2 typescript loader
      // {
      //   test: /\.ts$/,
      //   exclude: /(node_modules | config | build)/,
      //   use: [
      //     {
      //       loader: 'awesome-typescript-loader',
      //       options: {
      //         useBabel: true,
      //         useWebpackText: true,
      //         useCache: true,
      //         // babelCore: 'babel-core'
      //         babelCore: '@babel/core'
      //         // babelOptions: {
      //         //   plugins: [
      //         //     // '@babel/plugin-transform-runtime',
      //         //     'transform-runtime'
      //         //   ]
      //         // }
      //       }
      //     },
      //     {
      //       loader: 'angular2-template-loader'
      //     }
      //   ]
      // },
      // {
      //   test: /\.ts$/,
      //   exclude: /(node_modules | config | build)/,
      //   use: [
      //     {
      //       loader: 'angular-router-loader'
      //     }
      //   ]
      // },
      // {
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules | config | build)/,
      //   loader: 'babel-loader',
      //   include: [helpers.resolve('src'), helpers.resolve('test')]
      // },

      /**
       * To string and css loader support for *.css files (from Angular components)
       * Returns file content as string
       *
       */
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
        exclude: [helpers.root('src', 'styles')]
      },

      /**
       * To string and sass loader support for *.scss files (from Angular components)
       * Returns compiled css content as string
       *
       */
      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader'],
        exclude: [helpers.root('src', 'styles')]
      },

      /**
       * Raw loader support for *.html
       * Returns file content as string
       *
       * See: https://github.com/webpack/raw-loader
       */
      // html loader
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: [helpers.root('index.html')]
      },

      // Trocear loaders ASSETS
      // static assets
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        // use: 'file-loader',
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
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
        // use: 'file-loader'
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
      name: 'polyfills',
      chunks: ['polyfills']
    }),

    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      name: 'inline'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main',
      async: 'common',
      children: true,
      minChunks: 2
    }),

    
    // new webpack.optimize.CommonsChunkPlugin({
      // name: ['main', 'vendor', 'polyfills']
      // al omitir el campo filename, entiende que son los mismos que los campos de entrada
      // si no separamos en app y vendor, cada vez que usamos una libreria de terceros, copia y pega el codigo, esto optimiza lo repetido en un vendor
      // todo el codigo comun lo quita y lo pone en vendor
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   minChunks: Infinity
    // }),

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

     /**
       * Plugin: ScriptExtHtmlWebpackPlugin
       * Description: Enhances html-webpack-plugin functionality
       * with different deployment options for your scripts including:
       *
       * See: https://github.com/numical/script-ext-html-webpack-plugin
       */
      new ScriptExtHtmlWebpackPlugin({
        sync: /inline|polyfills|vendor/,
        defaultAttribute: 'async',
        preload: [/polyfills|vendor|main/],
        prefetch: [/chunk/]
      }),

    new ngcWebpack.NgcWebpackPlugin(ngcWebpackConfig.plugin),

    /**
     * Plugin: InlineManifestWebpackPlugin
     * Inline Webpack's manifest.js in index.html
     *
     * https://github.com/szrenwei/inline-manifest-webpack-plugin
     */
    new InlineManifestWebpackPlugin(),

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
