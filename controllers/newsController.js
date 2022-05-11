const News = require('../models/News')

async function getAllNews(req, res) {
  const [rows, fields] = await News.getAllNews()
  console.log(rows)
  res.status(200).json({ rows })
}

module.exports = { getAllNews }
