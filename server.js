const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()

const { Character, Species, Secondary, Branch, primaryElement, secondaryElement } = require('./models')

app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('landing page')
})
