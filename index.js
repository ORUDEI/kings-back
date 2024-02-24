const express = require('express')
const mongoose = require('mongoose')
const commentRoute = require('./routes/comment.route.js')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())

// Habilitar CORS para todas las solicitudes
app.use(cors())

app.use('/api/comments', commentRoute)

app.get('/', (req, res) => {
  res.send('Hello from Node API Server')
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to Database!')
  })
  .catch(() => {
    console.log('Connection Failed')
  })

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
