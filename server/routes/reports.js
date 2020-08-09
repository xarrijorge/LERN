const express = require('express')
const router = express.Router()

let reports = [
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
  const maxId = reports.length > 0 ? Math.max(...reports.map((m) => m.id)) : 0
  return maxId + 1
}

// Getting all reports

router.get('/', (req, res) => {
  res.json(reports)
})

// Getting one report

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  const report =
    reports.find((report) => report.id === id) ??
    `Sorry, report #${id} doesn't exist!`
  res.json(report)
})

// Adding a report
router.post('/', (req, res) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({
      error: 'missing content',
    })
  }

  const report = {
    content: body.content,
    approve: body.approve ?? false,
    date: new Date(),
    id: generateId(),
  }

  reports = reports.concat(report)

  res.json(report)
})

// Updating a report

// Deleting a single report
router.delete('/', (req, res) => {
  const id = Number(req.params.id)
  reports = reports.filter((report) => report.id !== id)

  res.status(204).end()
})
module.exports = router
