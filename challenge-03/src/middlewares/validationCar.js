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
  const reqBody = req.body

  const propKey = [
    'model',
    'image',
    'capacity',
    'rentPerDay',
    'availableAt',
    'description',
  ]

  // check property if exist
  for (const prop of propKey) {
    const check = prop in reqBody
    if (!check) {
      res.status(424).json({ message: `Missing Property ${prop}` })
      return
    }
  }

  next()
}
