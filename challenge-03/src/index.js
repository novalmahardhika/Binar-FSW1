const express = require('express')
const chalk = require('chalk')

const car = require('./routes/car')
const root = require('./routes/root')
const notFound = require('./routes/notFound')

const app = express()
const PORT = 3000

// middleware
app.use(express.json())

//endpoint
app.use('/', root) // Root endpoint

app.use('/cars', car) // Car endpoints

app.use('/', notFound) // 404 endpoint

// running server
app.listen(PORT, () => {
  console.log(
    `Server Running on`,
    chalk.cyanBright.underline(`http://localhost:${PORT}`)
  )
})
