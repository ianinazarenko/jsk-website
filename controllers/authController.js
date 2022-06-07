const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const { BadRequestError } = require('../errors')

async function register(req, res, next) {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    throw new BadRequestError('Please, provide all values.')
  }

  const userAlreadyExist = await User.findOne({ $or: [{ email }, { name }] })
  if (userAlreadyExist)
    throw new BadRequestError(
      'User with this email or name already exist, please, choose another one.'
    )

  const user = await User.create({ name, email, password })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user, token })
}

async function login(req, res) {
  res.send('login')
}

async function logout(req, res) {
  res.send('get current user')
}

module.exports = { register, login, logout }
