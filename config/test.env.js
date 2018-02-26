'use strict'

// If you don't need more config, add and merge with other environments
const merge = require('webpack-merge')
const envDev = require('./dev.env')

module.exports = merge(envDev, {
  NODE_ENV: '"testing"'
})
