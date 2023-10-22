const { User } = require('../models')
const bcrypt = require('bcrypt')

// repository create user
const createUserRepo = async (payload, isAdmin) => {
  return User.create({
    username: payload.username,
    email: payload.email,
    password: await bcrypt.hash(payload.password, 10),
    phone: payload.phone,
    role: isAdmin ? 'ADMIN' : 'MEMBER',
    address: payload.address,
  })
}

// repository user log in
const getUserLoginRepo = (email) => {
  const user = User.findOne({ where: { email } })
  return user
}

// load user log in
const findUserByPK = (id) => {
  const user = User.findByPk(id)
  return user
}

module.exports = { createUserRepo, getUserLoginRepo, findUserByPK }
