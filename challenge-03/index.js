const express = require('express')
const cars = require('./cars.json')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

// get all cars
app.get('/cars', (req, res) => {
  res.json(cars)
})

// get cars by id
app.get('/cars/:id', (req, res) => {
  res.json(cars.find((car) => car.id === req.params.id))
})

// created car
app.post('/cars', () => {
  res.json(cars)
})

// update car
app.put('/cars/:id', (req, res) => {
  res.json(cars.find((car) => car.id === req.params.id))
})

// delete car
app.delete('/cars/:id', (req, res) => {
  res.json(cars.find((car) => car.id === req.params.id))
})

// running server
app.listen(port, () => {
  console.log(`Server Running on http://localhost:${3000}`)
})
