const express = require('express')
const car = require('../src/routes/carRouter')
const chalk = require('chalk')

const app = express()
const port = 3000

app.use(express.json())
// endpoint

// cars endpoint
app.use('/cars', car)

// running server
app.listen(port, () => {
  console.log(
    `Server Running on`,
    chalk.yellowBright.underline(`http://localhost:${port}`)
  )
})
