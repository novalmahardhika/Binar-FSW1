const {
  createCarService,
  getListCarsService,
  updateCarService,
  getCarByIdService,
  deleteCarService,
} = require('../services/car.service')

const createCar = async (req, res) => {
  try {
    const payload = req.body
    const { id: userId } = req.user
    const car = await createCarService(payload, userId)

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

const getCarById = async (req, res) => {
  try {
    const _id = req.params.id
    const car = await getCarByIdService(_idcd)

    res.json({
      status: 'SUCCESS',
      message: 'get car success',
      data: car,
    })
  } catch (error) {
    res.status(500).json({ status: 'FAIL', message: error.message })
  }
}

const updateCar = async (req, res) => {
  try {
    const payload = req.body
    const { id: _id } = req.params
    const { id: userId } = req.user

    const [_, car] = await updateCarService(payload, _id, userId)

    res.json({
      status: 'SUCCESS',
      message: 'updated car success',
      data: car,
    })
  } catch (error) {
    res.status(500).json({ status: 'FAIL', message: error.message })
  }
}

const deleteCar = async (req, res) => {
  try {
    const _id = req.params.id
    const { id: userId } = req.user
    const [_, car] = await deleteCarService(_id, userId)

    res.json({
      status: 'SUCCESS',
      message: 'deleted car success',
      data: car,
    })
  } catch (error) {
    res.status(500).json({ status: 'FAIL', message: error.message })
  }
}

module.exports = { createCar, getListCars, getCarById, updateCar, deleteCar }
