const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
const AppRouter = require('./routers/AppRouter')
const { Species, Branch, Character } = require('./models')

app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('landing page')
})

app.use('/API', AppRouter)