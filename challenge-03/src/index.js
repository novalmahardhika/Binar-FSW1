import express from 'express'
// const chalk = require('chalk')

// const car = require('./routes/car')
// const root = require('./routes/root')
// const notFound = require('./routes/notFound')

import root from './routes/root.js'
import car from './routes/car.js'
import notFound from './routes/notFound.js'

const app = express()
const PORT = 3000

// middleware
app.use(express.json())

//endpoint
app.use('/', root) // Root endpoint
app.use('/cars', car) // Car endpoints
app.use(notFound) // 404 endpoint

// running server
app.listen(PORT, () => {
  console.log(`Server Running on`, `http://localhost:${PORT}`)
})
