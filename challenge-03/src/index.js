import express from 'express'

// routes
import root from './routes/root.js'
import car from './routes/car.js'
import notFound from './routes/404.js'

const app = express()
const PORT = 8888

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
