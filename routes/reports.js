const express = require('express')

const router = express.Router()
const Report = require('../models/reports')

// Getting all reports

router.get('/', async (req, res) => {
  const reports = await Report.find({})
  res.json(reports)
})

// Getting a single report

router.get('/:id', async (req, res) => {
  const report = await Report.findById(req.params.id)
  return report ? res.json(report) : res.status(404).end()
})

// Adding a report
router.post('/', async (req, res) => {
  const { body } = req

  // if (!body.content) {
  //   return res.status(400).json({
  //     error: 'missing content',
  //   })
  // }

  const report = new Report({
    title: body.title,
    content: body.content,
    approve: body.approve || false,
    date: body.date || new Date(),
  })

  const savedReport = await report.save()
  res.json(savedReport)
})

// Updating a single report
router.put('/:id', async (req, res) => {
  const { body } = req
  const entries = Object.keys(body)

  const report = await Report.findOne({ _id: req.params.id }, (docs) => docs)

  entries.forEach((el) => {
    report[el] = body[el] ?? report[el]
  })

  // await Report.save()
  await Report.findByIdAndUpdate(req.params.id, report, { new: true })
  res.json(report)
})

// Updating multiple reports

// Deleting a single report
router.delete('/:id', async (req, res) => {
  await Report.findByIdAndDelete(req.params.id)
  res.json(204).end()
})
module.exports = router
