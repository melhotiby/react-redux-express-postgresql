const ErrorResponse = require('../utils/errorResponse')
const { async: asyncHandler } = require('../middleware')
const knex = require('../knex')
const { getAll } = require('../knex/utils')

const {
  SUCCESS,
  BAD_REQUEST,
  NOT_FOUND,
  UNAUTHORIZED
} = require('../utils/statusCodes')

// @desc   Get all users
// @route  GET /api/v1/users
// @access Private
exports.getUsers = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body

  const query = await KNEX.raw(`select * from users`)
  const users = getAll(query)

  res.status(SUCCESS).json({ success: true, users })
})

// @desc   Delete a User
// @route  DELETE /api/v1/users
// @access Private
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params

  if (id) {
    await knex('users')
      .where('id', id)
      .del()

    const query = await KNEX.raw(`select * from users`)
    const users = getAll(query)

    return res.status(SUCCESS).json({ success: true, users })
  }

  return res.status(BAD_REQUEST).json({ success: false, users: [] })
})
