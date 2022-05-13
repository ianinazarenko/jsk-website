const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config()

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}

const pool = mysql.createPool(config)

module.exports = pool.promise()
