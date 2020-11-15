const mongoose = require('./db/mongoose')
const express = require('express')

const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, () => {
  console.log('mileage-list server listening at 3000')
})