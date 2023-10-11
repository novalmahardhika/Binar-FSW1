const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// register
const signUp = async (req, res) => {
  const body = req.body

  const newUser = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  })

  res.status(201).json({ message: 'registered success', data: newUser })
}

// sigIn
const signIn = async (req, res) => {
  const { email, password } = req.body

  console.log(req.headers)

  const user = await User.findOne({ where: { email: email } })

  if (!user) {
    res.status(404).json({ message: 'email not found' })
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password)

  if (!passwordIsValid) {
    res.status(401).json({ accessToken: null, message: 'Password Invalid' })
  }

  const token = jwt.sign({ id: user.id }, process.env.API_SECRET_ACCESS_TOKEN, {
    expiresIn: 60 * 60,
  })

  res
    .status(200)
    .json({ message: 'Login Success', accessToken: token, data: { user } })
}

module.exports = { signUp, signIn }
