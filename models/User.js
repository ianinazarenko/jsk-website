const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Пожалуйста, введите имя'],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, 'Пожалуйста, введите e-mail'],
    validate: {
      validator: validator.isEmail,
      massega: 'Пожалуйста, введите e-mail',
    },
  },
  password: {
    type: String,
    required: [true, 'Пожалуйста, введите пароль'],
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

module.exports = mongoose.model('User', UserSchema)
