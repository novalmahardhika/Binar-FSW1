const express = require('express')
const chalk = require('chalk')

const car = require('../src/routes/carRouter')
const root = require('./routes/rootRouter')

const app = express()
const port = 3000

app.use(express.json())

// root endpint
app.use('/', root)
// cars endpoint
app.use('/cars', car)

// running server
app.listen(port, () => {
  console.log(
    `Server Running on`,
    chalk.yellowBright.underline(`http://localhost:${port}`)
  )
})
