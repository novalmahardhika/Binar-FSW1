const { User } = require('../models')
const bcrypt = require('bcrypt')

// models
const createUserRepo = async (payload) => {
  return User.create({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: await bcrypt.hash(payload.password, 10),
    role: payload.role,
  })
}

const getUserLogInRepo = (email) => {
  const user = User.findOne({ where: { email: email } })
  return user
}

module.exports = { createUserRepo, getUserLogInRepo }
