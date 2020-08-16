const express = require('express')

const router = express.Router()
const Message = require('../models/messages')

// Route related methods

// Actual Routes
// Getting all messages

router.get('/', async (req, res) => {
  const messages = await Message.find({})
  res.json(messages)
})

// Adding a single message

router.post('/', async (req, res) => {
  const { body } = req

  const message = new Message({
    content: body.content,
    date: new Date(),
  })

  await message.save()
  res.json(message)
})

// // Getting a single message

// router.get('/:id', (req, res) => {
//   const id = Number(req.params.id)

//   const message =
//     messages.find((message) => message.id === id) ??
//     `Sorry, message #${id} doesn't exist`
//   res.json(message)
// })

// Deleting a single message

router.delete('/:id', async (req, res) => {
  await Message.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

module.exports = router
