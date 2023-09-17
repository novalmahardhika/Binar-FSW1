import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Ping Successfully' })
})
export default router
