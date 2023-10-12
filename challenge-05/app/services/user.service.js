const ApplicationError = require('../../config/errors/ApplicationError')
const bcrypt = require('bcrypt')

const {
  createUserRepo,
  getUserLogInRepo,
  loadUserLoginRepo,
} = require('../repositories/user.repository')

// business logic  create user service
const createUserService = async (payload) => {
  try {
    const newData = await createUserRepo(payload)

    return newData
  } catch (error) {
    throw new ApplicationError(`created user fail, ${error.message}`, 500)
  }
}

// business logic get user log in
const getUserLogInService = async (email, password) => {
  try {
    const user = await getUserLogInRepo(email)
    const passwordIsValid = await bcrypt.compare(password, user.password)

    if (!passwordIsValid) {
      throw new ApplicationError(`password is not valid`, 401)
    }

    return user
  } catch (error) {
    throw new ApplicationError(
      `get user fail, ${error.message}`,
      error.statusCode || 500
    )
  }
}

// business load user log in
const loadUserLoginService = async (id) => {
  try {
    const user = await loadUserLoginRepo(id)

    if (!user) {
      throw new ApplicationError(`user not found`, 404)
    }

    return user
  } catch (error) {
    throw new ApplicationError(
      `Login Fail, ${error.message}`,
      error.statusCode || 500
    )
  }
}

module.exports = {
  createUserService,
  getUserLogInService,
  loadUserLoginService,
}
