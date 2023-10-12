const express = require('express')
const { createCar, getListCars } = require('../app/controllers/car.controller')

const router = express.Router()

router.post('/cars', createCar)
router.get('/cars', getListCars)

module.exports = router
