const express = require('express')
const upload = require('../config/multer')

const {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} = require('../controllers/car.controllers')

const router = express.Router()
const uploadPhoto = upload.single('file')

// Create Car
router.post('/cars', uploadPhoto, createCar)

// Get all Cars
router.get('/cars', getAllCars)

// Get Car by Id
router.get('/cars/:id', getCarById)

// Update Car
router.put('/cars/:id', uploadPhoto, updateCar)

// Delete Car
router.delete('/cars/:id', deleteCar)

module.exports = router
