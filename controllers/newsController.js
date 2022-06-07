const { StatusCodes } = require('http-status-codes')
const News = require('../models/News')

async function getAllNews(req, res) {
  try {
    const news = await News.find({})
    if (!news?.length) throw new Error('No news')
    res.status(StatusCodes.OK).json({ news })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function getLatestNews(req, res) {
  try {
    const news = await News.find({}).sort({ createdAt: -1 }).limit(4)
    if (!news?.length) throw new Error('No news')
    res.status(200).json({ news })
  } catch (error) {
    console.log(error)
  }
}

async function getSingleNews(req, res) {
  const { id } = req.params
  try {
    const foundNews = await News.find({ id })

    if (!foundNews) throw new Error('News is not found')
    res.status(200).json({ foundNews })
  } catch (error) {
    console.log(error)
  }
}

async function createNews(req, res) {
  const { title, text, userId } = req.body
  try {
    const newNews = await News.create({
      title,
      body: text,
      userId,
    })
    if (!newNews) throw new Error('Can not create new user')
    res.status(201).json({ newNews })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllNews, getLatestNews, getSingleNews, createNews }
