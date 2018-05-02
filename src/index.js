var recryptjs = require('bitcoinjs-lib')

Object.assign(recryptjs.networks, require('./networks'))

recryptjs.utils = require('./utils')

module.exports = recryptjs