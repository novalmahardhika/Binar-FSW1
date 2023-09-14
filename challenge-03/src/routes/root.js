const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Ping Successfully' })
})

module.exports = router
