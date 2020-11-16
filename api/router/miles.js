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

// get one
router.get('/miles/:id', async (req, res) => {
  try {
    const miles = await Miles.findById({ _id: req.params.id})
    if (!miles) {
      console.log('miles not found')
      return res.send(404).send()
    }

    res.status(200).send(miles)

  } catch (e) {
    res.status(500).send()
  }
})

// add more miles
router.post('/miles', (req, res) => {
  let newMiles = new Miles(req.body)
  console.log(newMiles);
  newMiles.save().then((miles) => {
    res.status(201).send(miles)
  })
})

// update miles entry
router.patch('/miles/:id', (req, res) => {
  console.log(req.params.id)
  Miles.findByIdAndUpdate({ _id: req.params.id}, {
    $set: req.body
  }).then(() => {
    res.status(200).send('miles successfully updated')
  }).catch((e) => {
    console.log('error:',e)
    res.send(e)
  })
})

// delete miles
router.delete('/miles/:id', (req, res) => {
  Miles.findByIdAndDelete({_id: req.params.id})
  .then(() => {
    res.status(200).send('miles successfully deleted')
  }).catch((e) => {
    console.log('error:', e)
  })
})

module.exports = router