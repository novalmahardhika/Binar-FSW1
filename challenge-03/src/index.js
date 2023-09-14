const express = require('express')
const car = require('../src/routes/carRouter')
const app = express()
const port = 3000

// endpoint
app.use('/cars', car)

// running server
app.listen(port, () => {
  console.log(`Server Running on http://localhost:${3000}`)
})
