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

// @desc   Register User
// @route  POST /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body

  const query = await KNEX.raw(`select * from users`)
  const users = getFirst(query)
  // console.log(knex.queryBuilder().toString());

  res.status(SUCCESS).json({ success: true, users })
})
