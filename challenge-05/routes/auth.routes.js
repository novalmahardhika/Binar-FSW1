const express = require('express')
const {
  signUp,
  signIn,
  loadUser,
} = require('../app/controllers/auth.controllers')
const { verifyUser } = require('../middlewares/auth')
const router = express.Router()

router.post('/register', signUp)
router.post('/login', signIn)
router.get('/get-user', verifyUser, loadUser)

module.exports = router
