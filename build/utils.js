'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const config = require('../config');
const fs = require('fs');

exports.assetsPath = function(_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function(options, include, exclude) {
  options = options || {};
  include = include || {};
  exclude = exclude || {};

  const cssLoader = {
    loader: 'raw-loader',
    include: helpers.root('src', 'app')
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = [cssLoader];
    console.log('loaders =>', loaders);
    if (loader) {
      // console.log('loader =>', loader);
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
      // console.log('loaders dentro if =>', loaders);
    }
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'style-loader'
      });
    } else {
      return ['style-loader'].concat(loaders);
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  };
};

// Generate loaders for standalone style files
exports.styleLoaders = function(options, include, exclude) {
  const output = [];
  const loaders = exports.cssLoaders(options);
  console.log('results =>', loaders);
  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    });
  }
  console.log('output => ', output);
  return output;
};

/**
 * Global
 **/

exports.cssLoadersGlobal = function(options, include, exclude) {
  options = options || {};
  include = include || {};
  exclude = exclude || {};

  const cssLoader = {
    loader: 'raw-loader',
    include: helpers.root('src', 'app')
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = [cssLoader];
    console.log('loaders =>', loaders);
    if (loader) {
      // console.log('loader =>', loader);
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
      // console.log('loaders dentro if =>', loaders);
    }
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'style-loader'
      });
    } else {
      return ['style-loader'].concat(loaders);
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  };
};

// Generate loaders for standalone style files
exports.styleLoadersGlobal = function(options, include, exclude) {
  const output = [];
  const loaders = exports.cssLoadersGlobal(options);
  console.log('results =>', loaders);
  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    });
  }
  console.log('output => ', output);
  return output;
};

/* ======================================================== */
function getEnvFile(suffix) {
  if (suffix && suffix[0] !== '.') {
    suffix = '.' + suffix;
  }

  if (suffix === null) {
    return;
  }
  console.log(`src/environments/environment${suffix}.ts`);

  let fileName = helpers.root(`src/environments/environment${suffix}.ts`);

  console.log(fileName);

  if (fs.existsSync(fileName)) {
    return fileName;
  } else if (
    fs.existsSync((fileName = helpers.root('src/environments/environment.ts')))
  ) {
    console.warn(
      `Could not find environment file with suffix ${suffix}, loading default environment file`
    );
    return fileName;
  } else {
    throw new Error('Environment file not found.');
  }
}

// Se le pasa el entorno por el merge de webpack
// metadatos
exports.ngcWebpackSetup = (prod, metadata) => {
  if (!metadata) {
    metadata = DEFAULT_METADATA;
  }

  const buildOptimizer = prod && metadata.AOT;
  console.log(`Optimizacion: ${buildOptimizer}`);
  const sourceMap = true; // TODO: apply based on tsconfig value?
  const ngcWebpackPluginOptions = {
    skipCodeGeneration: !metadata.AOT,
    sourceMap
  };

  const environment = getEnvFile(metadata.envFileSuffix);
  if (environment) {
    ngcWebpackPluginOptions.hostReplacementPaths = {
      [helpers.root('src/environments/environment.ts')]: environment
    };
  }

  if (!prod && metadata.WATCH) {
    // Force commonjs module format for TS on dev watch builds.
    ngcWebpackPluginOptions.compilerOptions = {
      module: 'commonjs'
    };
  }

  const buildOptimizerLoader = {
    loader: '@angular-devkit/build-optimizer/webpack-loader',
    options: {
      sourceMap
    }
  };

  const loaders = [
    {
      test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
      use: buildOptimizer
        ? [buildOptimizerLoader, '@ngtools/webpack']
        : ['@ngtools/webpack']
      // use: ['@ngtools/webpack']
    },
    ...(buildOptimizer ? [{ test: /\.js$/, use: [buildOptimizerLoader] }] : [])
  ];

  return {
    loaders,
    plugin: ngcWebpackPluginOptions
  };
};
