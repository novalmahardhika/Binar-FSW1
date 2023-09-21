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

// ---check find id---
export const checkIdCar = (req, res, next) => {
  const _id = req.params.id
  const cars = JSON.parse(readFileSync(path))
  const car = cars.find((x) => x.id === _id)

  if (!car) {
    res.status(404).json({ error: 404, message: 'Car is Not Found' })
  }

  next()
}

//---check property if not exist---
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

// ---check  if property req.body !== model, or check unknown property exist or not exist.---
export const checkUnknownProp = (req, res, next) => {
  //convert obj to array and sort
  const reqBody = Object.keys(req.body).sort()
  const validation = propKey.sort()

  // get unknown property
  const validate = reqBody.filter((x) => !validation.includes(x))

  if (validate.length > 0) {
    res.status(400).json({ message: `Unknown '${validate}' Property` })
    return
  }

  next()
}

// check type value property
export const checkType = (req, res, next) => {
  const reqBody = req.body
  const typeStr = ['model', 'image', 'availableAt', 'description']
  const typNum = ['capacity', 'rentPerDay']

  // check type string
  for (const prop of typeStr) {
    const checkProp = reqBody.hasOwnProperty(prop)
    const checkTypeVal = typeof reqBody[prop] !== 'string'

    if (checkProp && checkTypeVal) {
      res.status(400).json({
        message: `property value '${prop} : ${reqBody[prop]}' should be string`,
      })
      return
    }
  }

  // check type number
  for (const prop of typNum) {
    const checkProp = reqBody.hasOwnProperty(prop)
    const checkTypeVal = typeof reqBody[prop] !== 'number'

    if (checkProp && checkTypeVal) {
      res.status(400).json({
        message: `property value '${prop} : ${reqBody[prop]}' should be number`,
      })
      return
    }
  }

  next()
}
