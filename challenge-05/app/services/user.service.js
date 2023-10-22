const ApplicationError = require('../../config/errors/ApplicationError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {
  createUserRepo,
  getUserLoginRepo,
} = require('../repositories/user.repository')

// business logic  create user service
const createUserService = async (payload, isAdmin) => {
  try {
    const newData = await createUserRepo(payload, isAdmin)

    return newData
  } catch (error) {
    throw new ApplicationError(`created user fail, ${error.message}`, 500)
  }
}

// business logic get user log in
const getUserLogInService = async (email, password) => {
  try {
    if (!email || !password) {
      throw new ApplicationError(`please check ur email or password`, 400)
    }

    const user = await getUserLoginRepo(email)

    if (!user) {
      throw new ApplicationError('user not found', 404)
    }

    const passwordIsValid = await bcrypt.compare(password, user.password)

    if (!passwordIsValid) {
      throw new ApplicationError('password not valid', 401)
    }

    const accessToken = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET_ACCESS_TOKEN
      // { expiresIn: '30m' }
    )

    user.setDataValue('token', accessToken)

    return user
  } catch (error) {
    throw new ApplicationError(error.message, error.statusCode || 500)
  }
}

module.exports = {
  createUserService,
  getUserLogInService,
}
