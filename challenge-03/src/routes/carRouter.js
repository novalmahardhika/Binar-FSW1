const express = require('express')
const {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} = require('../controllers/carController')

const router = express.Router()

// create new car
router.post('/', createCar)

// get all cars
router.get('/', getAllCars)

// get car by id
router.get('/:id', getCar)

// update car
router.put('/:id', updateCar)

// delete car
router.delete('/:id', deleteCar)

module.exports = router
