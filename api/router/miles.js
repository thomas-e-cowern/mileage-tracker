const express = require('express')
const Miles = require('../db/models/miles')

const router = new express.Router()

router.get('/', (req, res) => {
  res.send('Hello World from mileage-tracker router')
})



module.exports = router