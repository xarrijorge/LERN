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

  const user = await User.findOne({ userName: body.userName }, (tname) => tname)

  const { userName, name } = user

  const password = user
    ? await bcrypt.compare(body.password, user.passwordHash)
    : false

  if (!(user && password)) {
    return res.status(401).json({
      error: 'Invalid username or password',
    })
  }

  const tokenUser = {
    userName,
    id: user._id,
  }
  const token = jwt.sign(tokenUser, process.env.SECRET)
  res.status(200).send({
    token,
    userName,
    name,
  })
  return token
})

module.exports = router
