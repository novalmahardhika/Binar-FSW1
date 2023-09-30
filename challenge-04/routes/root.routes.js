import express from 'express'

const router = express.Router()

// Get all Cars
router.get('/', (req, res) => {
  res.send('Ping Successfully')
})

export default router
