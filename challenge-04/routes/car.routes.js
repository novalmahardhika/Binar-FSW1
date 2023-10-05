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
} = require('../middlewares/carValidation')

const router = express.Router()

// const uploadPhoto = upload.single('file')

// Create Car
router.post(
  '/cars',
  checkPropsNotExist,
  checkPropsNotExist,
  checkTypeVal,
  checkEnum,
  createCar
)

// Get all Cars
router.get('/cars', getAllCars)

// Get Car by Id
router.get('/cars/:id', checkIdCar, getCarById)

// Update Car
router.put(
  '/cars/:id',
  checkIdCar,
  checkPropsNull,
  checkTypeVal,
  checkEnum,
  updateCar
)

// Delete Car
router.delete('/cars/:id', checkIdCar, deleteCar)

module.exports = router
