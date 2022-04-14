import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())
app.use('/', (req, res) => {
  res.send('Hello')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listenning on port ${port}`))
