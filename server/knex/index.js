const { NODE_ENV } = process.env

const configuration = require('../knexfile')[NODE_ENV]

module.exports = require('knex')(configuration)
