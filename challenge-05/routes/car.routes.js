const express = require('express')
const {
  createCar,
  getListCars,
  updateCar,
  getCarById,
  deleteCar,
} = require('../app/controllers/car.controller')
const { verifyUser, isSuperOrIsAdmin } = require('../middlewares/auth')
const { checkUnknownPropCar } = require('../middlewares/validation')

const router = express.Router()

router.get('/cars', verifyUser, getListCars)
router.get('/cars/:id', verifyUser, getCarById)
router.delete('/cars/:id', verifyUser, isSuperOrIsAdmin, deleteCar)
router.post(
  '/cars',
  verifyUser,
  isSuperOrIsAdmin,
  checkUnknownPropCar,
  createCar
)
router.put(
  '/cars/:id',
  verifyUser,
  isSuperOrIsAdmin,
  checkUnknownPropCar,
  updateCar
)

module.exports = router
