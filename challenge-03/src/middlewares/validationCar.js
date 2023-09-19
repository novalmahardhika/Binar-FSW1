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

// check find id
export const checkIdCar = (req, res, next) => {
  const _id = req.params.id
  const cars = JSON.parse(readFileSync(path))
  const car = cars.find((x) => x.id === _id)

  if (!car) {
    res.status(404).json({ error: 404, message: 'Car is Not Found' })
  }

  next()
}

// check property if not exist
export const checkPropCar = (req, res, next) => {
  const reqBody = req.body

  for (const prop of propKey) {
    const check = prop in reqBody
    if (!check) {
      res.status(400).json({ message: `Missing Property ${prop}` })
      return
    }
  }

  next()
}

// check  if property req.body !== model or  check unkown property exist or > 1
export const checkUnkwnProp = (req, res, next) => {
  //convert obj to array and sort
  const reqBody = Object.keys(req.body).sort()
  const validation = propKey.sort()

  // get unknown property
  const validate = reqBody.filter((x) => !validation.includes(x))

  if (validate.length > 0) {
    res.status(400).json({ message: `Unknown Property ${validate}` })
    return
  }

  next()
}
