const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')

async function register(req, res) {
  // res.send('register')
  const { name, email, password } = req.body
  try {
    const user = await User.create({ name, email, password })
    if (!user) throw new Error('Can not register user')
    res.status(201).json({ user })
  } catch (error) {
    console.log(error)
  }
}

async function login(req, res) {
  res.send('login')
}

async function logout(req, res) {
  res.send('get current user')
}

module.exports = { register, login, logout }
