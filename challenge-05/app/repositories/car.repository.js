const { Car } = require('../models')

const createCarRepo = (payload) => {
  const car = Car.create(payload)
  return car
}

const getListCarsRepo = () => {
  const car = Car.findAll()
  return car
}

const getListCarsByQueryRepo = (query) => {
  const car = Car.findAll({ where: query })
  return car
}

const getCarByIdRepo = (id) => {
  const car = Car.findByPk(id)
  return car
}

const updateCarRepo = (payload, id) => {
  const updateCar = Car.update(payload, { where: { id: id }, returning: true })
  return updateCar
}

const deleteCarRepo = (id) => {
  const car = Car.destroy({ where: { id: id } })
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
