import db from '../config/db.js'
const Car = db.cars

// --- create car ---
export const createCar = async (req, res) => {
  const body = req.body
  const date = new Date(body.availableAt)
  const file = req.file.path
  // const image = file

  const newData = await Car.create({
    ...body,
    ...date,
    // ...image,
  })

  // console.log(image)

  res.status(201).json({ data: newData })
}

// --- get all cars ---
export const getAllCars = async (req, res) => {
  const cars = await Car.findAll()

  res.status(200).json({ data: cars })
}

// --- get car by id ---
export const getCarById = async (req, res) => {
  const _id = req.params.id
  const car = await Car.findByPk(_id)

  res.status(200).json({ data: car })
}

// --- update car ---
export const updateCar = async (req, res) => {
  const _id = req.params.id
  const body = req.body
  const car = await Car.findByPk(_id)

  car.set({
    ...car,
    ...body,
  })

  await car.save()

  res.status(200).json({ data: car })
}

// --- delete car ---
export const deleteCar = async (req, res) => {
  const _id = req.params.id
  const car = await Car.findByPk(_id)

  car.destroy()

  res.status(200).json({ message: 'Delete Successfully' })
}
