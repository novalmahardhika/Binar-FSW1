const express = require('express')
const upload = require('../config/multer')

const {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} = require('../controllers/car.controllers')

const {
  checkIdCar,
  checkPropsNotExist,
  checkPropsNull,
  checkPhoto,
  checkTypeVal,
  checkEnum,
  checkQueryParams,
  checkAvailableAt,
} = require('../middlewares/carValidation')

const router = express.Router()

// const uploadPhoto = upload.single('file')

// Get all Cars
router.get('/cars', checkQueryParams, getAllCars)

// Get Car by Id
router.get('/cars/:id', checkIdCar, getCarById)

// Create Car
router.post(
  '/cars',
  checkPropsNotExist,
  checkPropsNull,
  checkTypeVal,
  checkEnum,
  checkAvailableAt,
  createCar
)

// Update Car
router.put(
  '/cars/:id',
  checkIdCar,
  checkPropsNull,
  checkTypeVal,
  checkEnum,
  checkAvailableAt,
  updateCar
)

// Delete Car
router.delete('/cars/:id', checkIdCar, deleteCar)

module.exports = router
