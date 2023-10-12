const jwt = require('jsonwebtoken')

const verifyUser = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const decoded = await jwt.verify(token, process.env.API_SECRET_ACCESS_TOKEN)
  const user = await decoded

  req.user = user
  next()
}

module.exports = { verifyUser }
