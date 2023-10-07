const { Car } = require('../models')

// --- create car ---
const createCar = async (req, res) => {
  const body = req.body

  // const file = { image: req.file ? req.file.path : null }

  const newData = await Car.create({
    ...body,
  })

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
  const id = req.car.id
  // const file = { image: req.file.path }

  const target = {
    where: {
      id,
    },
    returning: true,
  }

  const [_, updatedData] = await Car.update(body, target)

  res.status(200).json({ data: updatedData })
}

// --- delete car ---
const deleteCar = async (req, res) => {
  const car = await req.car

  car.destroy()

  res.status(200).json({ message: 'Delete Successfully' })
}

module.exports = { createCar, getAllCars, getCarById, updateCar, deleteCar }
