const { User } = require('../models')
const bcrypt = require('bcrypt')

// repository create user
const createUserRepo = async (payload) => {
  return User.create({
    username: payload.username,
    email: payload.email,
    password: await bcrypt.hash(payload.password, 10),
    phone: payload.phone,
    role: payload.role,
    address: payload.address,
  })
}

// repository user log in
const getUserLogInRepo = (email) => {
  const user = User.findOne({ where: { email } })
  return user
}

// load user log in
const loadUserLoginRepo = (id) => {
  const user = User.findOne({ where: { id: id } })
  return user
}

module.exports = { createUserRepo, getUserLogInRepo, loadUserLoginRepo }
