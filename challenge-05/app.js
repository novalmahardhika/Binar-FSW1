const express = require('express')
require('dotenv').config()
const docRoutes = require('./routes/doc.routes')
const authRoute = require('./routes/auth.routes')
const carRoute = require('./routes/car.routes')
const notFound = require('./routes/404.routes')

const app = express()
const PORT = 8001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/api/v1', (req, res) => {
  res.json({ message: 'success' })
})
app.use('/api/v1', docRoutes)
app.use('/api/v1', authRoute)
app.use('/api/v1', carRoute)
app.use(notFound)

// Listen Server
app.listen(PORT, runServer(PORT))

// Hoisting function
function runServer(port) {
  console.log(`Server Running on http://localhost:${port}`)
}

// deleteBy
// updateBy
// createdBy
