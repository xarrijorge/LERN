const express = require('express')
const router = express.Router()

let messages = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

// Getting all messages

router.get('/', (req, res) => {
  res.json(messages)
})

// Adding a single message

router.post('/', (req, res) => {
  const maxId = messages.length > 0 ? Math.max(...messages.map((m) => m.id)) : 0

  const message = req.body

  message.id = maxId + 1

  messages = messages.concat(message)

  res.json(message)
})

// Deleting a single message

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  messages = messages.filter((message) => message.id !== id)

  res.status(204).end()
})

module.exports = router
