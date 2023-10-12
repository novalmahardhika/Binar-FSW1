const { User } = require('../models')
const bcrypt = require('bcrypt')

// repository create user
const createUserRepo = async (payload) => {
  return User.create({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: await bcrypt.hash(payload.password, 10),
    role: payload.role,
  })
}

// repository user log in
const getUserLogInRepo = (email) => {
  const user = User.findOne({ where: { email: email } })
  return user
}

module.exports = { createUserRepo, getUserLogInRepo }
