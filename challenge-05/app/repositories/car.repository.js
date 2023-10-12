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

module.exports = { createCarRepo, getListCarsRepo, getListCarsByQueryRepo }
