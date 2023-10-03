const express = require('express')

const router = express.Router()

// Get all Cars
router.get('/', (req, res) => {
  res.send('Ping Successfully')
})
module.exports = router
