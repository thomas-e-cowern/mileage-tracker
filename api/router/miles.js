const express = require('express')
const Miles = require('../db/models/miles')

const router = new express.Router()
router.use(express.json())

// get all
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
    res.status(201).send(miles)
  })
})

router.patch('/miles/:id', (req, res) => {
  console.log(req.param.id)
  Miles.findByIdAndUpdate({ _id: req.params.id}, {
    $set: req.body
  }).then(() => {
    res.status(200).send('miles successfully updated')
  }).catch((e) => {
    console.log('error:',e)
    res.send(e)
  })
})

router.delete('/miles/:id', (req, res) => {
  Miles.findByIdAndDelete({_id: req.params.id})
  .then(() => {
    res.status(200).send('miles successfully deleted')
  }).catch((e) => {
    console.log('error:', e)
  })
})


module.exports = router