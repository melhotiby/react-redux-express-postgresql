const ErrorResponse = require('../utils/ErrorResponse')
const asyncHandler = require('../middleware/async')
const KNEX = require('../knex')
const { getFirst } = require('../knex/utils')

const {
  SUCCESS,
  BAD_REQUEST,
  NOT_FOUND,
  UNAUTHORIZED
} = require('../utils/StatusCodes')

// @desc   Get all users
// @route  GET /api/v1/users
// @access Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body

  const query = await KNEX.raw(`select * from users`)
  const users = getFirst(query)

  res.status(SUCCESS).json({ success: true, users })
})
