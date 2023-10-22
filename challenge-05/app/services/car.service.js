const ApplicationError = require('../../config/errors/ApplicationError')
const {
  createCarRepo,
  getListCarsByQueryRepo,
  getListCarsRepo,
  updateCarRepo,
  getCarByIdRepo,
  deleteCarRepo,
} = require('../repositories/car.repository')

const createCarService = async (payload, userId) => {
  try {
    const car = await createCarRepo(payload, userId)
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

const getCarByIdService = async (_id) => {
  try {
    const car = await getCarByIdRepo(_id)

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

const updateCarService = async (payload, _id, userId) => {
  try {
    const car = await getCarByIdRepo(_id)

    if (!car) {
      throw new ApplicationError(`car not found`, 404)
    }

    const updateCar = await updateCarRepo(payload, _id, userId)

    return updateCar
  } catch (error) {
    throw new ApplicationError(
      `Update Fail, ${error.message}`,
      error.statusCode || 500
    )
  }
}

const deleteCarService = async (_id, userId) => {
  try {
    const car = await getCarByIdRepo(_id)

    if (!car) {
      throw new ApplicationError(`car not found`, 404)
    }

    const softDeleteCar = await deleteCarRepo(_id, userId)

    return softDeleteCar
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
