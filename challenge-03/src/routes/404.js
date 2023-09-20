import express from 'express'

const router = express.Router()

router.get('*', (req, res) => {
  const url = req.originalUrl
  res.status(404).json({ message: `Page ${url} Not Found` })
})

export default router
