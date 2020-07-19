
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./search-params.cjs.production.min.js')
} else {
  module.exports = require('./search-params.cjs.development.js')
}
