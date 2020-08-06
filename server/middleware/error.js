const colors = require('colors')
const {
  INTERNAL_SERVER,
  NOT_FOUND,
  BAD_REQUEST
} = require('../utils/StatusCodesrr')
const ErrorResponse = require('../utils/ErrorResponse')

const errorHandler = (err, req, res, next) => {
  let error = { ...err }
  error.message = err.message

  // Log to the console for developer
  console.log(err.stack.red)

  res.status(error.statusCode || INTERNAL_SERVER).json({
    success: false,
    error: error.message || 'Server Error'
  })
}

module.exports = errorHandler
