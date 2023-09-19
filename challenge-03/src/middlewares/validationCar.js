import { readFileSync, writeFileSync } from 'fs'

const path = './src/data/cars.json'

const propKey = [
  'model',
  'image',
  'capacity',
  'rentPerDay',
  'availableAt',
  'description',
]

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

export const checkUnkownProp = (req, res, next) => {
  const reqBody = req.body

  //convert obj to array and sort
  const body = Object.keys(reqBody).sort()
  const validation = propKey.sort()
  // convert array to string and compare
  const compare = body.toString() === validation.toString()
  // get unknown property
  const validate = body.filter((x) => !validation.includes(x))

  // condition if req.body !== model/parameter
  if (!compare) {
    res.status(424).json({ message: `Unknown Property ${validate}` })
    return
  }

  next()
}
