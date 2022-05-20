const db = require('../database')

class News {
  constructor(title, body, createdAt) {
    this.title = title
    this.body = body
    this.createdAt = createdAt
  }

  async create(authorId, authorName) {
    const sql = `
    INSERT INTO News(
      title,
      body,
      createdAt,
      authorId,
      authorName
    ) VALUES (?, ?, ?, ?, ?);
    `

    console.log(this.title, this.body, this.createdAt)
    const [rows, fields] = await db.execute(sql, [
      this.title,
      this.body,
      this.createdAt,
      authorId,
      authorName,
    ])
    return [rows, fields]
  }

  async delete() {}

  static async getAllNews() {
    const sql = `
    SELECT * FROM News
    ORDER BY createdAt DESC;
    `

    return await db.execute(sql)
  }

  static async getLatestNews() {
    const sql = `
    SELECT * FROM News
    ORDER BY createdAt DESC
    LIMIT 4;
    `

    return await db.execute(sql)
  }

  static async getSingleNews(id) {
    const sql = `
    SELECT * FROM News
    WHERE id = ${id};
    `

    return await db.execute(sql)
  }
}

module.exports = News
