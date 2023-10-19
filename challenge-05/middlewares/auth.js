const jwt = require('jsonwebtoken')
const { findUserByPK } = require('../app/repositories/user.repository')

const verifyUser = async (req, res, next) => {
  try {
    const header = req.headers.authorization

    if (!header) {
      res.status(401).json({
        status: 'FAIL',
        message: 'Unauthorized',
      })
    }

    const token = header.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS_TOKEN)
    const user = await findUserByPK(decoded.id)

    req.user = user.toJSON()
    next()
  } catch (error) {
    res.status(401).json({ status: 'FAIL', message: error.message })
  }
}

const isSuperAdmin = (req, res, next) => {
  const { role } = req.user
  console.log(role === 'SUPERADMIN')

  if (role !== 'SUPERADMIN') {
    res.status(403).json({ status: 'FORBIDDEN', message: 'user cannot access' })
    return
  }

  next()
}

const isSuperOrIsAdmin = (req, res, next) => {
  const { role } = req.user

  if (role !== 'ADMIN' && role !== 'SUPERADMIN') {
    res.status(403).json({ status: 'FORBIDDEN', message: 'user cannot access' })
    return
  }
  next()
}

module.exports = { verifyUser, isSuperAdmin, isSuperOrIsAdmin }
