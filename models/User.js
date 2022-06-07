const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Пожалуйста, введите имя.'],
    minlength: 3,
    maxlength: 20,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Пожалуйста, введите e-mail.'],
    validate: {
      validator: validator.isEmail,
      massega: 'Пожалуйста, введите e-mail.',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Пожалуйста, введите пароль.'],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
  passwordToken: String,
  passwordTokenExpirationDate: Date,
})

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  jwt.sign({ userId: this._id }, 'jwtSecret', { expiresIn: '1d' })
}

module.exports = mongoose.model('User', UserSchema)
