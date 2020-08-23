const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/users')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Testing 123')
})

router.get('/login', (req, res) => res.send('login page'))

router.post('/login', async (req, res) => {
  const { body } = req

  const user = await User.findOne({ username: body.username }, (name) => name)

  const password = user
    ? await bcrypt.compare(body.password, user.passwordHash)
    : false

  if (!(user && password)) {
    return res.status(401).json({
      error: 'Invalid username or password',
    })
  }
  const { username, name, _id: id } = user

  const tokenUser = {
    username,
    id,
  }
  const token = jwt.sign(tokenUser, process.env.SECRET)
  user.lastlogin = new Date()
  user.save()

  res.status(200).send({
    token,
    username,
    name,
  })
  return token
})

module.exports = router
