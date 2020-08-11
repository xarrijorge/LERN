const express = require('express')

const router = express.Router()
const User = require('../models/users')

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((error) => next(error))
})

// Adding a user
router.post('/', (req, res) => {
  const { body } = req

  const user = new User({
    username: body.username,
    name: body.name,
    email: body.email,
    password: body.password,
    lastlogin: new Date(),
  })

  user.save().then((savedUser) => res.json(savedUser))
})

// Updating a user
router.put('/:id', (req, res, next) => {
  const { body } = req

  const user = {
    name: body.name,
    email: body.email,
    password: body.password,
  }

  User.findByIdAndUpdate(req.params.id, user, { new: true })
    .then((updatedUser) => res.json(updatedUser))
    .catch((error) => next(error))
})

// Deleting a user
router.delete('/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error))
})

module.exports = router
