const express = require('express')
const Miles = require('../db/models/miles')

const router = new express.Router()
router.use(express.json())

router.get('/miles', (req, res) => {
  Miles.find({})
  .then((miles) => {
    res.send(miles)
  }).catch((e) => {
    console.log('error:', e)
  })
})

router.post('/miles', (req, res) => {
  
  let newMiles = new Miles(req.body)
  console.log(newMiles);
  newMiles.save().then((miles) => {
    res.send(miles)
  })
})


module.exports = router