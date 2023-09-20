import express from 'express'

//--controller--
import {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} from '../controllers/carController.js'

//---middlewares---
import {
  checkIdCar,
  checkPropCar,
  checkUnknownProp,
  checkType,
} from '../middlewares/validationCar.js'

const router = express.Router()

// create car
router.post('/', checkPropCar, checkUnknownProp, checkType, createCar)

// get all cars
router.get('/', getAllCars)

// get car by id
router.get('/:id', checkIdCar, getCar)

// update car
router.put('/:id', checkIdCar, checkUnknownProp, checkType, updateCar)

// delete car
router.delete('/:id', checkIdCar, deleteCar)

export default router
