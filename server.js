const express = require('express')
const dotenv = require('dotenv')

// middleware
const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')

// routes
const newsRouter = require('./routes/newsRoutes')

dotenv.config()
const app = express()

app.use(express.json())
app.get('/', async (req, res) => {
  res.send('Hello from server')
})

app.use('/api/v1/news', newsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.listen(port, async () => {
  console.log(`Server is listenning on port ${port}`)
})
