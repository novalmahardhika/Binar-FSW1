const express = require('express')
const { signUp, signIn } = require('../app/controllers/auth.controllers')
const router = express.Router()

router.post('/register', signUp)
router.post('/login', signIn)

module.exports = router
