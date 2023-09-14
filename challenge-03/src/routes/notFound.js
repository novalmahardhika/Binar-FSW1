const express = require('express')

const router = express.Router()

router.all('*', (req, res) => {
  const url = req.originalUrl
  res.status(404).send(`Page ${url} Not Found`)
})

module.exports = router
