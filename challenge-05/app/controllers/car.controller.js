const { deleteCarRepo } = require('../repositories/car.repository')
const {
  createCarService,
  getListCarsService,
  updateCarService,
  getCarByIdService,
  deleteCarService,
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

const getCarById = async (req, res) => {
  try {
    const car = await getCarByIdService(req.params.id)

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
    const [_, car] = await updateCarService(req.body, req.params.id)

    console.log(car)
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
    await deleteCarService(req.params.id)

    res.json({
      status: 'SUCCESS',
      message: 'deleted car success',
    })
  } catch (error) {
    res.status(500).json({ status: 'FAIL', message: error.message })
  }
}

module.exports = { createCar, getListCars, getCarById, updateCar, deleteCar }
