// const express = require('express')
import express from 'express'
import {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} from '../controllers/carController.js'

const router = express.Router()

// create car
router.post('/', createCar)

// get all cars
router.get('/', getAllCars)

// get car by id
router.get('/:id', getCar)

// update car
router.put('/:id', updateCar)

// delete car
router.delete('/:id', deleteCar)

export default router
