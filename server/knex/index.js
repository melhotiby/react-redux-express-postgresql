const dotenv = require('dotenv')
const { NODE_ENV } = process.env

// Load env vars
dotenv.config()

const configuration = require('../knexfile')[NODE_ENV]

module.exports = require('knex')(configuration)
