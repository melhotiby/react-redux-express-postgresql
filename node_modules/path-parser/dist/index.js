
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./path-parser.cjs.production.min.js')
} else {
  module.exports = require('./path-parser.cjs.development.js')
}
