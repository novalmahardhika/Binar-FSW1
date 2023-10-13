const ApplicationError = require('../../config/errors/ApplicationError')
const {
  createCarRepo,
  getListCarsByQueryRepo,
  getListCarsRepo,
  updateCarRepo,
  getCarByIdRepo,
  deleteCarRepo,
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

const getCarByIdService = async (id) => {
  try {
    const car = await getCarByIdRepo(id)

    if (!car) {
      throw new ApplicationError(`car not found`, 404)
    }

    return car
  } catch (error) {
    throw new ApplicationError(
      `Fail,  ${error.message}`,
      error.statusCode || 500
    )
  }
}

const updateCarService = async (payload, id) => {
  try {
    const updateCar = await updateCarRepo(payload, id)

    return updateCar
  } catch (error) {
    throw new ApplicationError(
      `Update Fail, ${error.message}`,
      statusCode || 500
    )
  }
}

const deleteCarService = async (id) => {
  try {
    const car = deleteCarRepo(id)

    return car
  } catch (error) {
    throw new ApplicationError(`Deleted Fail, ${error.message}`, 500)
  }
}

module.exports = {
  createCarService,
  getListCarsService,
  getCarByIdService,
  updateCarService,
  deleteCarService,
}
