const jwt = require('jsonwebtoken')
const {
  createUserService,
  getUserLogInService,
  loadUserLoginService,
} = require('../services/user.service')

// register
const signUp = async (req, res) => {
  try {
    const payload = req.body
    const newUser = await createUserService(payload)

    res.status(201).json({
      status: 'SUCCESS',
      message: 'registered success',
      data: newUser,
    })
  } catch (error) {
    res.status(error.statusCode).json({
      status: 'FAIL',
      message: error.message,
    })
  }
}

// sigIn
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await getUserLogInService(email, password)

    const accessToken = jwt.sign(
      { id: user.id },
      process.env.API_SECRET_ACCESS_TOKEN,
      {
        expiresIn: 60 * 60,
      }
    )

    res.json({
      status: 'success',
      message: 'Log in Successfully',
      data: user,
      accessToken: accessToken,
    })
  } catch (error) {
    res
      .status(error.statusCode)
      .json({ status: 'FAIL', message: error.message })
  }
}

// load user
const loadUser = async (req, res) => {
  try {
    const user = await loadUserLoginService(req.user.id)

    res.json({ status: 'success', data: user })
  } catch (error) {
    res
      .status(error.statusCode)
      .json({ status: 'FAIL', message: error.message })
  }
}

module.exports = { signUp, signIn, loadUser }
