const jwt = require('jsonwebtoken')

const verifyUser = async (req, res, next) => {
  const header = req.headers.authorization

  if (!header) {
    res.status(401).json({
      status: 'FAIL',
      message: 'Unauthorized',
    })
  }

  const token = header.split(' ')[1]
  const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS_TOKEN)
  const user = decoded

  req.user = user
  next()
}

module.exports = { verifyUser }
