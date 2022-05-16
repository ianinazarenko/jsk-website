const express = require('express')
const {
  getAllNews,
  getLatestNews,
  getSingleNews,
  createNews,
} = require('../controllers/newsController')
const router = express.Router()

router.route('/').get(getAllNews).post(createNews)
router.route('/latest').get(getLatestNews)
router.route('/:id').get(getSingleNews)

module.exports = router
