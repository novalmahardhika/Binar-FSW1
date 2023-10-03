const express = require('express')

const router = express.Router()

// Get all Cars
router.get('*', (req, res) => {
  res.send(`Not Found : 404`)
})

module.exports = router

