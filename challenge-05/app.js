const express = require('express')
require('dotenv').config()
const root = require('./routes/root.routes')
const docRoutes = require('./routes/doc.routes')
const authRoute = require('./routes/auth.routes')
const carRoute = require('./routes/car.routes')
const notFound = require('./routes/404.routes')

const app = express()
const PORT = 8001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/', root)
app.use('/api/v1', docRoutes)
app.use('/api/v1', authRoute)
app.use('/api/v1', carRoute)
app.use('/', notFound)

// Listen Server
app.listen(PORT, runServer(PORT))

// Hoisting function
function runServer(port) {
  console.log(`🟢 Server Running on http://localhost:${port}`)
  console.log('----------------------------------------------------------')
  console.log(`👉 open-api: http://localhost:${port}/api/v1/api-docs  `)
  console.log('----------------------------------------------------------')
}
