const dotenv = require('dotenv')
const colors = require('colors')
const KNEX = require('knex')

// Load env vars
dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env

async function createDatabase() {
  const knex = KNEX({
    client: 'pg',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: 'postgres',
      charset: 'utf8'
    }
  })

  try {
    await knex.raw(`CREATE DATABASE ${DB_DATABASE}`)
    console.log(`Created database ${DB_DATABASE}`.green.inverse)
  } catch (e) {
    console.log(e.message.magenta.inverse)
  } finally {
    await knex.destroy()
  }
}

createDatabase()
