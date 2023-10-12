const ApplicationError = require('../../config/errors/ApplicationError')
const {
  createCarRepo,
  getListCarsByQueryRepo,
  getListCarsRepo,
} = require('../repositories/car.repository')

const createCarService = async (payload) => {
  try {
    const car = await createCarRepo(payload)
    return car
  } catch (error) {
    throw new ApplicationError(
      `Created Fail,  ${error.message}`,
      error.statusCode || 500
    )
  }
}

const getListCarsService = async (query) => {
  const getListCars = await getListCarsRepo()
  const getCarByQuery = await getListCarsByQueryRepo(query)

  if (getCarByQuery) {
    return getCarByQuery
  }

  return getListCars
}

module.exports = { createCarService, getListCarsService }
