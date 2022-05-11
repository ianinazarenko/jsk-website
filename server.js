const express = require('express')
const dotenv = require('dotenv')

const newsRouter = require('./routes/newsRoutes')

dotenv.config()
const app = express()

app.use(express.json())
app.get('/', async (req, res) => {
  res.send('Hello from server')
})

app.use('/api/v1/news', newsRouter)

const port = process.env.PORT || 5000

app.listen(port, async () => {
  console.log(`Server is listenning on port ${port}`)
})
