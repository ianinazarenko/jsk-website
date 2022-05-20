const express = require('express')
const dotenv = require('dotenv')

// mongo db
const connectDB = require('./database/connect')

// middleware
var cors = require('cors')
const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')

// routes
const authRouter = require('./routes/authRoutes')
const newsRouter = require('./routes/newsRoutes')

dotenv.config()
const app = express()

app.set('trust proxy', 1)
app.use(cors())

app.use(express.json())
app.get('/', async (req, res) => {
  res.send('Hello from server')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/news', newsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

async function start() {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, async () => {
      console.log(`Server is listenning on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
