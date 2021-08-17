const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.send('Server running....')
})

app.listen(3000, () => { console.log('server running on port 3000') })