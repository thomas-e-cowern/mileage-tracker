const mongoose = require('./db/mongoose')
const express = require('express')

// config web server
const app = express()

// config routing
const router = require('./router/miles')
app.use(router)


app.use(express.json())
 
 
app.listen(3000, () => {
  console.log('mileage-list server listening at 3000')
})