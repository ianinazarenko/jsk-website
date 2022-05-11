const db = require('../database')

class News {
  constructor(title, text, created) {
    this.title = title
    this.text = text
    this.created = created
  }

  async save() {
    const sql = `
    INSERT INTO News(
      title,
      text
    ) VALUES (?, ?, ?)
    `
    const [rows, fields] = await db.execute(sql, [this.title, this.text, this.created])
    return [rows, fields]
  }

  async delete() {}

  static async getAllNews() {
    const sql = `
    SELECT * FROM News
    `

    return await db.execute(sql)
  }
}

module.exports = News
