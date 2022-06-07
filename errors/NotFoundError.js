const APIError = require('./APIError')
const { StatusCodes } = require('http-status-codes')

class NotFoundError extends APIError {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND)
  }
}

module.exports = NotFoundError
