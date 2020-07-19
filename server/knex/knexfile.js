const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env

function afterCreate(connection, callback) {
  connection.query(
    `
    SET intervalstyle = iso_8601;
    SET statement_timeout = 25000; -- milliseconds
    SET pg_trgm.word_similarity_threshold = 0.1
  `,
    callback
  )
}

module.exports = {
  development: {
    acquireConnectionTimeout,
    client: 'pg',
    pool: {
      afterCreate,
      min: 2,
      max: 10
    },
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      port: DB_PORT
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    acquireConnectionTimeout,
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    pool: {
      afterCreate,
      min: 2,
      max: 25
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
}
