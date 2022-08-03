const express = require('express')

const router = express.Router()

// GET a single workout
router.get('/', (req, res) => {
  res.json({ mssg: 'GET all workouts' })
})

//POST a new workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single workout'})
})

//DELETE a workout
router.delete('/:id', (req, res)=> {
  res.json({mssg: 'DELETE a workout'})
})
 
//UPDATE a workout
router.patch('/:id', (req, res)=> {
  res.json({mssg: 'UPDATE a workout'})
}) 

router.post('/', (req, res)=> {
  res.json({mssg: 'POST a new workout'})
})


module.exports = router