const express = require('express')
const { signUp, signIn } = require('../app/controllers/auth.controller')
const { verifyUser } = require('../middlewares/auth')

const router = express.Router()

router.post('/register', signUp)
router.post('/login', signIn)

module.exports = router
