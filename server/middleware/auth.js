const jwt = require('jsonwebtoken')
const asyncHandler = require('./async')
const { UNAUTHORIZED, FORBIDDEN } = require('../utils/StatusCodes')
const { getFirst } = require('../knex/utils')
const ErrorResponse = require('../utils/ErrorResponse')

const knex = require('../knex')

const protect = asyncHandler(async (req, res, next) => {
  let token
  const { authorization } = req.headers
  const { JWT_SECRET } = process.env

  if (authorization && authorization.startsWith('Bearer')) {
    // set token from Bearer Token from header
    token = authorization.split(' ')[1]
  }

  // Set token from cookie
  // else if (req.cookies.token) {
  //   token = req.cookies.token
  // }

  // Make sure token exists
  if (!token) {
    return next(
      new ErrorResponse('Not Authorized to access this routes', UNAUTHORIZED)
    )
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    const query = await knex
      .select('*')
      .from('users')
      .where('id', decoded.id)

    req.user = getFirst(query)

    return next()
  } catch (err) {
    new ErrorResponse('Not Authorized to access this routes', UNAUTHORIZED)
  }
})

module.exports = protect
