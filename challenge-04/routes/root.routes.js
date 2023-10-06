const express = require('express')

const router = express.Router()

// Get all Cars
router.get('/', (req, res) => {
  res.json({
    message: 'Ping Successfully',
  })
})
module.exports = router
