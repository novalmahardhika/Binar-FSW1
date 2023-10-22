const { Car, User } = require('../models')

const createCarRepo = (payload, userId) => {
  const car = Car.create({ ...payload, createdBy: userId })
  return car
}

const getListCarsRepo = () => {
  const cars = Car.findAll()
  return cars
}

const getListCarsByQueryRepo = (query) => {
  const car = Car.findAll({
    where: query,
  })
  return car
}

const getCarByIdRepo = (_id) => {
  const car = Car.findByPk(_id, {
    include: [
      {
        model: User,
        as: 'createdCarBy',
      },
      {
        model: User,
        as: 'updatedCarBy',
      },
      {
        model: User,
        as: 'deletedCarBy',
      },
    ],
    attributes: { exclude: ['createdBy', 'updatedBy', 'deletedBy'] },
  })
  return car
}

const updateCarRepo = (payload, _id, userId) => {
  const updateCar = Car.update(
    { ...payload, updatedBy: userId },
    { where: { id: _id }, returning: true }
  )

  return updateCar
}

const deleteCarRepo = async (_id, userId) => {
  await Car.destroy({ where: { id: _id } })
  const car = Car.update(
    { deletedBy: userId },
    { where: { id: _id }, paranoid: false, returning: true }
  )

  return car
}

module.exports = {
  createCarRepo,
  getListCarsRepo,
  getListCarsByQueryRepo,
  getCarByIdRepo,
  updateCarRepo,
  deleteCarRepo,
}
