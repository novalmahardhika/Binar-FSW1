const { Car } = require('../models')

// --- create car ---
const createCar = async (req, res) => {
  const body = req.body
  const date = new Date(body.availableAt)
  const file = { image: req.file ? req.file.path : null }

  const newData = await Car.create({
    ...body,
    ...file,
    ...date,
    // name: name,
    // type: type,
    // image: file,
    // capacity: capacity,
    // rentPerDay: rentPerDay,
    // description: description,
    // availableAt: date,
  })

  console.log(file)

  res.status(201).json({ data: newData })
}

// --- get all cars ---
const getAllCars = async (req, res) => {
  const cars = await Car.findAll()

  res.status(200).json({ data: cars })
}

// --- get car by id ---
const getCarById = async (req, res) => {
  const car = await req.car

  res.status(200).json({ data: car })
}

// --- update car ---
const updateCar = async (req, res) => {
  const body = req.body
  const car = await req.car
  // const file = { image: req.file.path }

  car.set({
    ...car,
    ...body,
    // ...file,
  })

  await car.save()

  res.status(200).json({ data: car })
}

// --- delete car ---
const deleteCar = async (req, res) => {
  const car = await req.car

  car.destroy()

  res.status(200).json({ message: 'Delete Successfully' })
}

module.exports = { createCar, getAllCars, getCarById, updateCar, deleteCar }
