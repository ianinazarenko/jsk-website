const News = require('../models/NewsMySQL')

async function getAllNews(req, res) {
  const [rows, _] = await News.getAllNews()
  res.status(200).json({ rows })
}

async function getLatestNews(req, res) {
  const [rows, _] = await News.getLatestNews()
  console.log(rows)
  res.status(200).json({ news: rows })
}

async function getSingleNews(req, res) {
  const { id } = req.params
  const [rows, _] = await News.getSingleNews(id)
  res.status(200).json({ rows })
}

async function createNews(req, res) {
  const { title, text } = req.body
  const newNews = new News(title, text, new Date().toISOString().slice(0, 19).replace('T', ' '))
  const [rows, _] = await newNews.create(1, 'admin')
  res.status(201).json({ rows })
}

module.exports = { getAllNews, getLatestNews, getSingleNews, createNews }
