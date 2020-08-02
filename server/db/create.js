const dotenv = require('dotenv')

// Load env vars
dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env

async function createDatabase() {
  const knex = require('knex')({
    client: 'pg',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: 'postgres',
      charset: 'utf8'
    }
  })

  await knex.raw(`CREATE DATABASE ${DB_DATABASE}`)
  console.log(`Created database ${DB_DATABASE}`)
  await knex.destroy()
}

createDatabase()
