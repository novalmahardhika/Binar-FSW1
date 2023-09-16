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
  const cars = JSON.parse(readFileSync(path))
  const { image, model, capacity, rentPerDay, availableAt, description } =
    req.body
  const newCar = {
    id: Date.now().toString(),
    image,
    model,
    capacity,
    rentPerDay,
    availableAt,
    description,
  }

  cars.push(newCar)

  writeFileSync(path, JSON.stringify(cars))

  res.status(201).json({
    message: 'Create success',
    data: newCar,
  })
}

// update car
const updateCar = (req, res) => {
  const _id = req.params.id
  const { image, model, capacity, rentPerDay, availableAt, description } =
    req.body
  const cars = JSON.parse(readFileSync(path))
  const car = cars.find((x) => x.id === _id)

  if (!car) {
    res.status(404).json({ error: 404, message: 'Car is Not Found' })
  }

  car.image = image
  car.model = model
  car.capacity = capacity
  car.rentPerDay = rentPerDay
  car.description = description
  car.availableAt = availableAt

  writeFileSync(path, JSON.stringify(cars))

  res.status(200).json({
    message: 'Car Updated !',
    data: car,
  })
}

// delete car
const deleteCar = (req, res) => {
  const _id = req.params.id
  const cars = JSON.parse(readFileSync(path))
  const carIndex = cars.findIndex((x) => x.id === _id)

  cars.splice(carIndex, 1)
  writeFileSync(path, JSON.stringify(cars))

  res.status(200).json({
    message: 'car is deleted',
    data: cars[carIndex],
  })
}

module.exports = { getAllCars, getCar, createCar, updateCar, deleteCar }
