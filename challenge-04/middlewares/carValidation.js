const { Car } = require('../models')

const checkIdCar = async (req, res, next) => {
  try {
    const _id = req.params.id
    const car = await Car.findByPk(_id)

    if (!car) {
      res.status(404).json({
        status: 404,
        error: `id is not found`,
        message: `please check the correct id`,
      })
      return
    }

    req.car = car

    next()
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
      message: `Please check the correct format id, id format does not match UUIDV4`,
    })
  }
}

const checkPhoto = async (req, res, next) => {
  const photo = await req.file

  console.log(photo === undefined)

  if (photo === undefined) {
    res.status(424).json({
      status: 424,
      error: 'file image is undefined',
      message: 'please check ur image',
    })
    return
  }

  next()
}

const checkPropsNotExist = async (req, res, next) => {
  const body = await req.body
  // parse payload to json
  const bodyParse = JSON.parse(JSON.stringify(body))
  // get property model and convert into array
  const arrModelCar = Object.keys(await Car.getAttributes()).slice(1, 8)

  // check payload if property not exist
  for (const prop of arrModelCar) {
    if (!(prop in bodyParse)) {
      res.status(400).json({
        status: 400,
        error: 'property cannot empty',
        message: `Missing Property ${prop}`,
      })

      return
    }
  }

  req.car = body
  next()
}

const checkPropsNull = async (req, res, next) => {
  const body = await req.body
  // parse payload to json
  const bodyParse = JSON.parse(JSON.stringify(body))

  // check payload if null
  for (const prop in bodyParse) {
    const valueProp = bodyParse[prop]
    if (valueProp === null) {
      res.status(400).json({
        status: 400,
        error: 'Property cannot null',
        message: `Property ${prop} is null`,
      })

      return
    }
  }

  next()
}

const checkTypeVal = async (req, res, next) => {
  const car = await req.car
  const arrStr = ['name', 'type', 'image', 'description', 'availableAt']
  const arrInt = ['capacity', 'rentPerDay']

  for (let prop of arrStr) {
    if (typeof car[prop] !== 'string') {
      res.status(400).json({
        status: 400,
        error: 'incorect type data',
        message: `type data '${prop}' is ${typeof car[prop]} not String`,
      })

      return
    }
  }

  for (let prop of arrInt) {
    if (typeof car[prop] !== 'number') {
      res.status(400).json({
        status: 400,
        error: 'incorect type data',
        message: `type data '${prop}' is ${typeof car[prop]} not Number`,
      })

      return
    }
  }

  next()
}

const checkEnum = async (req, res, next) => {
  const body = await req.body
  const enumType = ['small', 'medium', 'large']

  for (const prop in body) {
    if (prop === 'type' && !enumType.includes(body[prop])) {
      res.status(400).json({
        status: 400,
        error: `type value is not identified`,
        message: `type value '${body[prop]}', should be ${enumType}`,
      })

      return
    }
  }

  next()
}

module.exports = {
  checkIdCar,
  checkPropsNotExist,
  checkPropsNull,
  checkTypeVal,
  checkPhoto,
  checkEnum,
}
