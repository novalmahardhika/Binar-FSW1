const jwt = require('jsonwebtoken')

const verifyUser = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const decoded = jwt.verify(token, process.env.API_SECRET_ACCESS_TOKEN)
  const user = decoded

  req.user = user
  next()
}

module.exports = { verifyUser }
