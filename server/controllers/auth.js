const { omit } = require('ramda')
const ErrorResponse = require('../utils/ErrorResponse')
const { async: asyncHandler, auth } = require('../middleware')

const knex = require('../knex')
const { getAll, getFirst } = require('../knex/utils')
const {
  encyptPassword,
  getSignedJwdToken,
  matchPassword
} = require('../utils/auth')

const {
  SUCCESS,
  BAD_REQUEST,
  NOT_FOUND,
  UNAUTHORIZED,
  INTERNAL_SERVER
} = require('../utils/StatusCodes')

// @desc   Get Logged in User
// @route  GET /api/v1/auth/me
// @access Private
exports.me = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.user
    const query = await knex
      .select('*')
      .from('users')
      .where('id', id)

    const user = getFirst(query)

    res.status(SUCCESS).json({ success: true, data: omit(['password'], user) })
  } catch (e) {
    res.status(INTERNAL_SERVER).json({ success: false, user: false })
  }
})

// @desc   Register User
// @route  POST /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, firstName, lastName, username } = req.body

  // Check for the user in the Database
  const query = await knex
    .select('*')
    .from('users')
    .where('email', email)
    .orWhere('username', username)
  const user = getFirst(query)

  if (user) {
    return next(
      new ErrorResponse(`email or username are already taken`, UNAUTHORIZED)
    )
  }

  // Create user
  const encyptedPass = await encyptPassword(password)
  const userId = await knex('users')
    .returning('id')
    .insert({
      firstName,
      lastName,
      username,
      email,
      password: encyptedPass
    })

  // Create Token
  const token = getSignedJwdToken(userId)

  res.status(SUCCESS).json({ success: true, token })
})

// @desc   Login User
// @route  POST /api/v1/auth/login
// @access Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password: enteredPassword } = req.body

  // validate email and password
  if (!email || !enteredPassword) {
    return next(
      new ErrorResponse(`Please provide an email and password`, BAD_REQUEST)
    )
  }

  // Check for the user in the Database
  const query = await knex
    .select('*')
    .from('users')
    .where('email', email)
  const user = getFirst(query)

  if (!user) {
    return next(new ErrorResponse(`Invalid Credentials`, UNAUTHORIZED))
  }

  // Check is password matches
  const { id, password } = user
  const isMatch = await matchPassword(password, enteredPassword)

  if (!isMatch) {
    return next(new ErrorResponse(`Invalid Credentials`, UNAUTHORIZED))
  }

  // Update the lastLogin to the current timestamp
  await knex('users')
    .where('id', id)
    .update({
      lastLogin: knex.fn.now()
    })

  // Create Token
  const token = getSignedJwdToken(id)

  res.status(SUCCESS).json({ success: true, token })
})
