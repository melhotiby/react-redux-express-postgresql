const dotenv = require('dotenv')

// Load env vars
dotenv.config()

require('./server/knex/pg')

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_DATABASE,
  DB_PORT,
  DATABASE_URL
} = process.env

const acquireConnectionTimeout = 5000 // milliseconds

module.exports = {
  development: {
    acquireConnectionTimeout,
    client: 'pg',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      port: DB_PORT
    },
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/development'
    }
  },
  production: {
    acquireConnectionTimeout,
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/development'
    }
  }
}
