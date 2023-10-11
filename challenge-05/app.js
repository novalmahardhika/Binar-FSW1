const express = require('express')
require('dotenv').config()
const authRoute = require('./routes/auth.routes')

const app = express()
const PORT = 8001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use(authRoute)

// Listen Server
app.listen(PORT, runServer(PORT))

// Hoisting function
function runServer(port) {
  console.log(`Server Running on http://localhost:${port}`)
}
