import express from 'express'
import upload from '../config/multer.js'
import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} from '../controllers/car.controllers.js'

const router = express.Router()

// Create Car
router.post('/cars', upload.single('file'), createCar)

// Get all Cars
router.get('/cars', getAllCars)

// Get Car by Id
router.get('/cars/:id', getCarById)

// Update Car
router.put('/cars/:id', updateCar)

// Delete Car
router.delete('/cars/:id', deleteCar)

export default router
