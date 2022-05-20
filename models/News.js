const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      reqired: [true, 'Пожалуйста, заполните заголовок новости'],
      minlength: 3,
      maxlength: 255,
      trime: true,
    },
    body: {
      type: String,
      required: [true, 'Пожалуйста, добавьте текст новости'],
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('News', NewsSchema)
