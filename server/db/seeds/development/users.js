const faker = require('faker')
const { call, times } = require('ramda')

const colors = require('colors')
const dotenv = require('dotenv')

const encyptPassword = require('../../../utils/encrypt')

const COUNT = 100
const tableName = 'users'
const createOne = async () => {
  return await {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatarUrl: faker.image.avatar(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: await encyptPassword('password')
  }
}

// Import into DB
const create = async knex => {
  try {
    const data = await createOne()
    await knex(tableName).insert(data)
  } catch (err) {
    console.error(err)
  }
}

const createAll = async knex => {
  const promises = await call(
    times(() => {
      return create(knex)
    }),
    COUNT
  )
  return Promise.all(promises)
}

exports.seed = async function(knex) {
  await knex.raw(`TRUNCATE TABLE ${tableName} RESTART IDENTITY CASCADE`)

  let promises = await createAll(knex)

  console.log(`${COUNT} ${tableName} added created!`.green.inverse)
  return Promise.all(promises)
}
