'use strict';

const path = require('path');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
