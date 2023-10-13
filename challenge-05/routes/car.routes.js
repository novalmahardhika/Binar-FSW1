const express = require('express')
const {
  createCar,
  getListCars,
  updateCar,
  getCarById,
  deleteCar,
} = require('../app/controllers/car.controller')

const router = express.Router()

router.post('/cars', createCar)
router.get('/cars', getListCars)
router.get('/cars/:id', getCarById)
router.put('/cars/:id', updateCar)
router.delete('/cars/:id', deleteCar)

module.exports = router
