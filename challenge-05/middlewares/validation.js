const { Car, User } = require('../app/models')

const checkUnknownPropCar = async (req, res, next) => {
  const body = Object.keys(req.body).sort()
  const arrModelCar = Object.keys(await Car.getAttributes())

  const validate = body.filter((x) => !arrModelCar.includes(x))

  if (validate.length > 0) {
    res
      .status(400)
      .json({ status: 'FAIL', message: `Unknown '${validate}' Property` })
    return
  }

  next()
}

const checkUnknownPropUser = async (req, res, next) => {
  const body = Object.keys(req.body).sort()
  const arrModelUser = Object.keys(await User.getAttributes())

  const validate = body.filter((x) => !arrModelUser.includes(x))

  if (validate.length > 0) {
    res
      .status(400)
      .json({ status: 'FAIL', message: `Unknown '${validate}' Property` })
    return
  }

  next()
}

const checkPropCredential = async (req, res, next) => {
  const body = Object.keys(req.body).sort()
  const arrCredential = ['email', 'password']

  const validate = body.filter((x) => !arrCredential.includes(x))

  if (validate.length > 0) {
    res.status(400).json({
      status: 'FAIL',
      message: `Login should be only use email & password, this property '${validate}' cannot be here`,
    })
    return
  }

  next()
}

module.exports = {
  checkUnknownPropCar,
  checkUnknownPropUser,
  checkPropCredential,
}
