const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    status: `Success`,
    message: 'open API : http://localhost:8001/api/v1/api-docs',
  })
})

module.exports = router
