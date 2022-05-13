const {
  StatusCodes: { INTERNAL_SERVER_ERROR },
} = require('http-status-codes')

function errorHandler(err, req, res, next) {
  const defaultError = {
    statusCode: INTERNAL_SERVER_ERROR,
    msg: 'Что-то пошло не так, попробуйте ещё раз позже',
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}

module.exports = errorHandler
