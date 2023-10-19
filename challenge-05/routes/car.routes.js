const express = require('express')
const {
  createCar,
  getListCars,
  updateCar,
  getCarById,
  deleteCar,
} = require('../app/controllers/car.controller')
const { verifyUser, isSuperOrIsAdmin } = require('../middlewares/auth')

const router = express.Router()

router.post('/cars', isSuperOrIsAdmin, createCar)
router.get('/cars', verifyUser, getListCars)
router.get('/cars/:id', getCarById)
router.put('/cars/:id', verifyUser, isSuperOrIsAdmin, updateCar)
router.delete('/cars/:id', verifyUser, isSuperOrIsAdmin, deleteCar)

module.exports = router
