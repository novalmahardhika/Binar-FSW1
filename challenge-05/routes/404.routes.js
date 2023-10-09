const express = require('express')

const router = express.Router()

// Get all Cars
router.get('*', (req, res) => {
  const url = req.originalUrl

  res.status(404).json({
    status: 404,
    error: '`Not Found`',
    message: `Cannot find URL:${url}`,
  })
})

module.exports = router
