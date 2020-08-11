const express = require('express')
const router = express.Router()
const Message = require('../models/messages')

// Route related methods

// Actual Routes
// Getting all messages

router.get('/', (req, res) => {
  Message.find({}).then((messages) => res.json(messages))
})

// Adding a single message

router.post('/', (req, res) => {
  const body = req.body

  const message = new Message({
    content: body.content,
    date: new Date(),
  })

  message.save().then((savedMessage) => res.json(savedMessage))
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

router.delete('/:id', (req, res) => {
  Message.findByIdAndDelete(req.params.id).then((result) =>
    res.status(204).end()
  )
})

module.exports = router
