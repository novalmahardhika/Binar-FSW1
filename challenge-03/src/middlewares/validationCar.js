import { readFileSync, writeFileSync } from 'fs'
const path = './src/data/cars.json'

export const checkIdCar = (req, res, next) => {
  const _id = req.params.id
  const cars = JSON.parse(readFileSync(path))
  const car = cars.find((x) => x.id === _id)

  if (!car) {
    res.status(404).json({ error: 404, message: 'Car is Not Found' })
  }

  next()
}

export const checkPropCar = (req, res, next) => {
  const data = req.body

  const prop = [
    'model',
    'image',
    'capacity',
    'rentPerDay',
    'availableAt',
    'description',
  ]

  const check = prop.every((x) => data.hasOwnProperty(x))

  if (!check) {
    res.status(200).json({ message: 'please check ur request body' })
  }

  next()
}
