const {
  createCarService,
  getListCarsService,
} = require('../services/car.service')

const createCar = async (req, res) => {
  try {
    const car = await createCarService(req.body)

    res.status(201).json({
      status: 'SUCCESS',
      message: 'Created Successfully',
      data: car,
    })
  } catch (error) {
    res
      .status(error.statusCode)
      .json({ status: 'FAIL', message: error.message })
  }
}

const getListCars = async (req, res) => {
  try {
    const queryParams = req.query
    const cars = await getListCarsService(queryParams)

    res.json({
      status: 'SUCCESS',
      message: 'get list cars success',
      data: cars,
    })
  } catch (error) {
    res.status(500).json({ status: 'FAIL', message: error.message })
  }
}

module.exports = { createCar, getListCars }
