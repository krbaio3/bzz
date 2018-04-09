// Plugins
const { ContextReplacementPlugin, DefinePlugin } = require('webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { NgcWebpackPlugin } = require('ngc-webpack');
const { DllBundlesPlugin } = require('webpack-dll-bundles-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const DebugWebpackPlugin = require('debug-webpack-plugin');

// helpers and builders
const { polyfills, vendor } = require('./bundle');
const { resolve, root, absolutPath } = require('./helpers');
const {
  ngcWebpackSetup,
  assetsLoader,
  tsLintLoader,
  preAssetsLoader,
  scssLoaders
} = require('./utils');
const { build, dev } = require('../config');
const { entry, output, METADATOS_DEFECTO } = require('./builder');
const postCSS = absolutPath('../postcss.config');

const NODE_ENV =
  process.env.NODE_ENV == 'production' ? build.env.NODE_ENV : dev.env.NODE_ENV;

// Preconfigurado, e.g: Firebase
const APP_CONFIG =
  process.env.NODE_ENV == 'production'
    ? { API_URL: 'prod.api.local' }
    : { API_URL: 'dev.api.local' };

const isProduction = NODE_ENV == build.env.NODE_ENV;

const METADATOS = Object.assign({}, METADATOS_DEFECTO, {
  ENV: NODE_ENV,
  envFileSuffix: isProduction ? 'prod' : ''
});

const ngcWebpackConfig = ngcWebpackSetup(isProduction, METADATOS);

const assets_loader = assetsLoader(10 * 1024);

const tsLint_loader = tsLintLoader(
  [resolve('src'), resolve('test')],
  METADATOS
);

const preAssets_loader = preAssetsLoader(isProduction);

const scss_loaders = scssLoaders(isProduction);

Object.assign(ngcWebpackConfig.plugin, {
  tsConfigPath: METADATOS.tsConfigPath,
  mainPath: entry.main
});

console.log(`Vendor: ${vendor} \n Polyfills: ${polyfills}`);

console.log(`Variable de entorno: ${NODE_ENV}`);

console.log(
  `Define plugin: METADATos.ENV ${METADATOS.ENV} y APP_CONFIG: ${JSON.stringify(
    APP_CONFIG
  )}`
);

console.log(`is production: ${isProduction}`);

console.log(`builder.Metadatos: ${JSON.stringify(METADATOS, null, 2)}`);

module.exports = {
  entry: entry,
  output: output,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // Indicamos el alias para que al hacer el import, sepa dónde tiene que ir a buscar
    alias: {
      '@': resolve('src')
    },
    mainFields: ['browser', 'module', 'main'],
    /**
     * Indique a webpack qué directorios se deben buscar al resolver módulos.
     *
     * See: https://webpack.js.org/configuration/resolve/#resolve-modules
     */
    modules: [root('src'), root('node_modules')]
  },
  module: {
    rules: [
      // Trocear loaders en PRE

      ...tsLint_loader,
      // See: https://github.com/tcoopman/image-webpack-loader
      ...preAssets_loader,

      // equivalente al typescript loader
      // See: https://github.com/shlomiassaf/ngc-webpack
      ...ngcWebpackConfig.loaders,
      /**
       * To string and css loader support for *.css files (from Angular components)
       * Returns file content as string
       *
       */
      {
        test: /\.css$/,
        use: [
          { loader: 'to-string-loader' },
          { loader: 'css-loader', options: { sourceMap: isProduction } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isProduction,
              config: {
                path: postCSS
              }
            }
          }
        ],
        exclude: [root('src', 'styles')]
      },

      /**
       * To string and sass loader support for *.scss files (from Angular components)
       * Returns compiled css content as string
       *
       */

      ...scss_loaders,

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
        exclude: [root('index.html')]
      },

      // Assets Loader
      // See:
      // * https://github.com/bhovhannes/svg-url-loader
      // * https://github.com/webpack-contrib/url-loader
      ...assets_loader
    ]
  },

  plugins: [
    new DebugWebpackPlugin({
      // Defaults to ['webpack:*'] which can be VERY noisy, so try to be specific
      scope: [
        'webpack:compiler:*', // include compiler logs
        'webpack:plugin:UglifyJsPlugin' // include a specific plugin's logs
      ],

      // Inspect the arguments passed to an event
      // These are triggered on emits
      listeners: {
        'webpack:compiler:run': function(compiler) {
          console.log(compiler, null, 4);
          // Read some data out of the compiler
        }
      },

      // Defaults to the compiler's setting
      debug: false
    }),

    new DefinePlugin({
      'process.env': {
        ENV: METADATOS.ENV,
        APP_CONFIG: JSON.stringify(APP_CONFIG)
      }
    }),
    // si no separamos en app y vendor, cada vez que usamos una libreria de terceros, copia y pega el codigo, esto optimiza lo repetido en un vendor
    // todo el codigo comun lo quita y lo pone en vendor
    // Revisarr al actualizar a webpack4
    new CommonsChunkPlugin({
      name: 'polyfills',
      chunks: ['polyfills']
    }),

    new CommonsChunkPlugin({
      minChunks: Infinity,
      name: 'inline'
    }),
    new CommonsChunkPlugin({
      name: 'main',
      async: 'common',
      children: true,
      minChunks: 2
    }),

    /**
     * Plugin: ScriptExtHtmlWebpackPlugin
     * Description: Enhances html-webpack-plugin functionality
     * with different deployment options for your scripts including:
     *
     * See: https://github.com/numical/script-ext-html-webpack-plugin
     */
    new ScriptExtHtmlWebpackPlugin({
      sync: /inline|polyfills|vendor|main/,
      defaultAttribute: 'async',
      preload: [/polyfills|vendor|main/],
      prefetch: [/chunk/]
    }),

    new NgcWebpackPlugin(ngcWebpackConfig.plugin),

    // https://github.com/shlomiassaf/webpack-dll-bundles-plugin
    // Separa en archivos las librerías de terceros para que no se tengan que recompilar
    // PROBLEMA CON LAZY LOADING: https://github.com/shlomiassaf/webpack-dll-bundles-plugin/issues/21
    new DllBundlesPlugin({
      bundles: {
        polyfills: [...polyfills],
        vendor: [...vendor]
      },
      dllDir: './lib'
    }),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      xhtml: true,
      minify: isProduction
        ? {
            caseSensitive: true,
            collapseWhitespace: true,
            keepClosingSlash: true
          }
        : false
    }),

    new ContextReplacementPlugin(/angular(\\|\/)core/, resolve('src'), {}),

    // See: https://github.com/webpack-contrib/extract-text-webpack-plugin
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    }),

    /**
     * Plugin: InlineManifestWebpackPlugin
     * Inline Webpack's manifest.js in index.html
     * Lo que antes poniamos como manifest, ahora no podemos ponerlo por la version
     * del htmlPlugin, ahora lo ponemos con el InlineManifest....
     *
     * https://github.com/szrenwei/inline-manifest-webpack-plugin
     */
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    }),

    new AddAssetHtmlPlugin([
      {
        filepath: root(`lib/${DllBundlesPlugin.resolveFile('polyfills')}`),
        includeSourcemap: false
      },
      {
        filepath: root(`lib/${DllBundlesPlugin.resolveFile('vendor')}`),
        includeSourcemap: false
      }
    ])
  ]
};
