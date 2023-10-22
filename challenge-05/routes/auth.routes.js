const express = require('express')
const {
  signUp,
  signIn,
  adminRegister,
  currentUser,
} = require('../app/controllers/auth.controller')
const { verifyUser, isSuperAdmin } = require('../middlewares/auth')

const router = express.Router()

router.post('/admin/register', verifyUser, isSuperAdmin, adminRegister)
router.post('/register', signUp)
router.post('/login', signIn)
router.get('/current-user', verifyUser, currentUser)

module.exports = router
