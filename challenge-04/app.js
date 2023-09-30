import express from 'express'
import rootRoutes from './routes/root.routes.js'
import carRoutes from './routes/car.routes.js'
import notFoundRoutes from './routes/404.routes.js'
import serverRun from './server.js'

const app = express()
const PORT = 8001

// middleware
app.use(express.json()) //parsing payload JSON
app.use(express.urlencoded({ extended: false })) //parsing payload URL encoded

// endpoint
app.use(rootRoutes)
app.use(carRoutes)
app.use(notFoundRoutes)

// server
app.listen(PORT, serverRun(PORT))
