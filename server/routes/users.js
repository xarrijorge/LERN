const bcrypt = require('bcrypt')
const express = require('express')

const router = express.Router()
const User = require('../models/users')

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// Adding a user
router.post('/', async (req, res) => {
  const { body } = req

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    email: body.email,
    passwordHash,
    lastlogin: new Date(),
    reportCount: 0,
  })

  await user.save()
  res.json(user)
})

// Updating a user
router.put('/:id', async (req, res) => {
  const { body } = req

  const user = {
    name: body.name,
    email: body.email,
    password: body.password,
  }

  await User.findByIdAndUpdate(req.params.id, user, {
    new: true,
  })
  res.json(user)
})

// Deleting a user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

module.exports = router
