const express = require('express')
const {
  signUp,
  signIn,
  adminRegister,
  currentUser,
} = require('../app/controllers/auth.controller')
const { verifyUser, isSuperAdmin } = require('../middlewares/auth')
const {
  checkUnknownPropUser,
  checkPropCredential,
} = require('../middlewares/validation')

const router = express.Router()

router.post(
  '/admin/register',
  verifyUser,
  isSuperAdmin,
  checkUnknownPropUser,
  adminRegister
)
router.post('/register', checkUnknownPropUser, signUp)
router.post('/login', checkPropCredential, signIn)
router.get('/current-user', verifyUser, currentUser)

module.exports = router
