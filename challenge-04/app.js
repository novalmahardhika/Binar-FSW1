import express from 'express'

const app = express()
const PORT = 8001

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`)
})
