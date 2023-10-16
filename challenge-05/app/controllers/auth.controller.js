const {
  createUserService,
  getUserLogInService,
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

    res.json({ user })
  } catch (error) {
    res
      .status(error.statusCode)
      .json({ status: 'FAIL', message: error.message })
  }
}

module.exports = { signUp, signIn }
