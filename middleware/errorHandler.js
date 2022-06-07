const { StatusCodes } = require('http-status-codes')

function errorHandler(err, req, res, next) {
  const error = {
    statusCode: err.statusCode,
    msg: err.message || 'Что-то пошло не так, попробуйте ещё раз позже.',
  }

  if (err.name && err.name === 'ValidationError') {
    error.statusCode = StatusCodes.BAD_REQUEST
    error.msg = Object.values(err.errors)
      .map((item, index) => `${index + 1}: ${item.message}`)
      .join(' ')
  }

  // 11000 - check for unique fields
  if (err.code && err.code === 11000) {
    error.statusCode = StatusCodes.BAD_REQUEST
    console.log(Object.keys(err))
    error.msg = `${Object.keys(err.keyValue)} should be unique, please, choose another one.`
  }
  // res.status(500).json({ err })
  res.status(error.statusCode).json({ msg: error.msg })
}

module.exports = errorHandler
