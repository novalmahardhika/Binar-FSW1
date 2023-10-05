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

module.exports = { checkIdCar }
