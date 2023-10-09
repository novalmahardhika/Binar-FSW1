const express = require('express')
const dotenv = require('dotenv')

const app = express()
const PORT = 8001

app.listen(PORT, runServer(PORT))
 
// Hoisting function
function runServer(port) {
  console.log(`Server Running on http://localhost:${port}`)
}
