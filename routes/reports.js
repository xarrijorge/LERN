const express = require('express')
const router = express.Router()
const Report = require('../models/reports')

// Getting all reports

router.get('/', (req, res) => {
  Report.find({}).then((reports) => res.json(reports))
})

// Getting a single report

router.get('/:id', (req, res, next) => {
  Report.findById(req.params.id)
    .then((report) => {
      if (report) {
        res.json(report)
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => next(error))
})

// Adding a report
router.post('/', (req, res) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({
      error: 'missing content',
    })
  }

  const report = new Report({
    title: body.title,
    content: body.content,
    approve: body.approve ?? false,
    date: body.date ?? new Date(),
    id: generateId(),
  })

  report.save().then((savedReport) => res.json(savedReport))
})

// Updating a single report
router.put('/:id', (req, res, next) => {
  const body = req.body

  let report = {
    title: body.title,
    content: body.content,
    approve: body.approve,
  }
  Report.findByIdAndUpdate(req.params.id, report, { new: true })
    .then((updatedReport) => res.json(updatedReport))
    .catch((error) => next(error))
})

// Updating multiple reports

// Deleting a single report
router.delete('/:id', (req, res, next) => {
  Report.findByIdAndDelete(req.params.id)
    .then((result) => res.status(204).end())
    .catch((error) => next(error))
})
module.exports = router
