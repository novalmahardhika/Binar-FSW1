const express = require('express')
const {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} = require('../controllers/carController')

const router = express.Router()

// get all cars
router.get('/', getAllCars)

// get car by id
router.get('/:id', getCar)

// create car
router.post('/', createCar)

// update car
router.put('/:id', updateCar)

// delete car
router.delete('/:id', deleteCar)

module.exports = router
