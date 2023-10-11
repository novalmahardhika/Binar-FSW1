const express = require('express')
const { signUp, signIn } = require('../app/controllers/auth.controllers')
const router = express.Router()

router.post('/api/v1/register', signUp)
router.post('/api/v1/login', signIn)

module.exports = router
