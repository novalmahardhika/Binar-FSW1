const { readFileSync, writeFileSync } = require('fs')
const { v4: uuidv4 } = require('uuid')
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
    id: uuidv4(),
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
  }

  if (Object.keys(req.body).length < 6) {
    res.status(424).json({
      message:
        'Create Failed, Please make sure the contents of your req is correct',
      data: req.body,
    })

    return
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
  const newData = req.body
  let cars = JSON.parse(readFileSync(path))
  let car = cars.findIndex((x) => x.id === _id)

  if (!car) {
    res.status(404).json({ error: 404, message: 'Car is Not Found' })
  }

  cars[car] = {
    ...cars[car],
    ...newData,
  }

  writeFileSync(path, JSON.stringify(cars))

  res.status(200).json({
    message: 'Car Updated !',
    data: cars[car],
  })
}

// delete car
const deleteCar = (req, res) => {
  const _id = req.params.id
  const cars = JSON.parse(readFileSync(path))
  const car = cars.filter((x) => x.id !== _id)

  writeFileSync(path, JSON.stringify(car))

  res.status(200).json({
    message: 'car is deleted',
  })
}

module.exports = { getAllCars, getCar, createCar, updateCar, deleteCar }
