const path = require('path');
const { DllPlugin, ContextReplacementPlugin } = require('webpack');
const { resolve } = require('./helpers');

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: [__dirname, 'node_modules']
  },

  entry: {
    library: [
      '@angular/animations',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/platform-server',
      '@angular/router',
      '@ngrx/store',
      'core-js',
      'rxjs',
      'zone.js'
    ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../lib/library'),
    library: '[name]'
  },
  plugins: [
    new DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../lib/[name].json')
    }),
    new ContextReplacementPlugin(/angular(\\|\/)core/, resolve('src'))
  ]
};
