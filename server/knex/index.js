require('./pg')
const { NODE_ENV } = process.env

const knexFile = require('./knexfile')

const config = knexFile[NODE_ENV]
module.exports = require('knex')(config)
