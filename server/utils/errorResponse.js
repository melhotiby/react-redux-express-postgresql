class ErrorResponse extends Error {
  constructor(message, StatusCode) {
    super(message)
    this.statusCode = StatusCode
  }
}

module.exports = ErrorResponse
