import express from 'express'
import {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} from '../controllers/carController.js'

import {
  checkIdCar,
  checkPropCar,
  checkUnkwnProp,
} from '../middlewares/validationCar.js'

const router = express.Router()

// create car
router.post('/', checkPropCar, checkUnkwnProp, createCar)

// get all cars
router.get('/', getAllCars)

// get car by id
router.get('/:id', checkIdCar, getCar)

// update car
router.put('/:id', checkIdCar, checkUnkwnProp, updateCar)

// delete car
router.delete('/:id', checkIdCar, deleteCar)

export default router
