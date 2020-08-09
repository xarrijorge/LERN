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

const generateId = () => {
  const maxId = messages.length > 0 ? Math.max(...messages.map((m) => m.id)) : 0
  return maxId + 1
}
// Getting all messages

router.get('/', (req, res) => {
  res.json(messages)
})

// Adding a single message

router.post('/', (req, res) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({
      error: 'missing content',
    })
  }

  const message = {
    content: body.content,
    important: body.important ?? false,
    date: new Date(),
    id: generateId(),
  }

  messages = messages.concat(message)

  res.json(message)
})

// Getting a single message

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  const message =
    messages.find((message) => message.id === id) ??
    `Sorry, message #${id} doesn't exist`
  res.json(message)
})

// Deleting a single message

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  messages = messages.filter((message) => message.id !== id)

  res.status(204).end()
})

module.exports = router
