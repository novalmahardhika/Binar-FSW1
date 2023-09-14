const { readFileSync, writeFileSync } = require('fs')
const path = './src/data/cars.json'

// get all cars
const getAllCars = (req, res) => {
  const cars = JSON.parse(readFileSync(path))

  res.status(200).send(cars)
}

// get car by id
const getCar = (req, res) => {
  const _id = req.params.id
  const cars = JSON.parse(readFileSync(path))
  const car = cars.find((x) => x.id === _id)

  if (!car) {
    res.status(404).json({ error: 404, message: 'Car is Not Found' })
  }

  res.status(200).json({
    message: 'success',
    data: car,
  })
}

// create car
const createCar = (req, res) => {
  const newCar = req.body

  res.status(200).json({
    message: 'Create new Car success',
    data: newCar,
  })
}

// update car
const updateCar = (req, res) => {
  const _id = req.params.id
  const cars = JSON.parse(readFileSync(path))
  const car = cars.find((x) => x.id === _id)

  if (!car) {
    res.status(404).json({ error: 404, message: 'Car is Not Found' })
  }

  res.status(200).json({
    message: 'Car Updated !',
    data: car,
  })
}

// delete car
const deleteCar = (req, res) => {
  const _id = req.params.id
  const cars = JSON.parse(readFileSync(path))
  const deleted = cars.filter((x) => x.id !== _id)

  res.status(200).json({
    message: 'car is deleted',
    data: deleted,
  })
}

module.exports = { getAllCars, getCar, createCar, updateCar, deleteCar }
