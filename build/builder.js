/**
 * Configuracion de ruteo
 */

const config = require('../config');
const helpers = require('./helpers');

// En vendor deberían de estar las librerías de terceros comunes a todo el proyecto, para así partirlo y que la carga sea más rpida
const entry = {
  polyfills: './src/polyfills.ts',
  vendor: './src/vendor.ts',
  main: './src/main.ts'
};

const output = {
  path: config.build.assetsRoot,
  // path: helpers.root('dist'),
  filename: '[name].js',
  publicPath:
    process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  chunkFilename: '[id].chunk.js'
};

const METADATOS_DEFECTO = {
  title: 'Proyect Base Front',
  baseUrl: '/',
  // HMR: helpers.hasProcessFlag('hot'),
  AOT: process.env.BUILD_AOT || helpers.hasNpmFlag('aot'),
  E2E: !!process.env.BUILD_E2E,
  // WATCH: helpers.hasProcessFlag('watch'),
  tsConfigPath: 'tsconfig.json',
  /**
   * This suffix is added to the environment.ts file, if not set the default environment file is loaded (development)
   * To disable environment files set this to null
   */
  envFileSuffix: ''
};

const METADATOS = Object.assign({}, METADATOS_DEFECTO, {
  // host: HOST,
  // port: PORT,
  // ENV: ENV,
  // HMR: helpers.hasProcessFlag('hot'),
  // PUBLIC: process.env.PUBLIC_DEV || HOST + ':' + PORT
});

exports.entry = entry;
exports.output = output;
exports.METADATOS_DEFECTO = METADATOS_DEFECTO;
exports.METADATOS = METADATOS;
