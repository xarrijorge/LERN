const express = require('express')

const router = express.Router()
const Report = require('../models/reports')
const User = require('../models/users')

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

  const report = new Report({
    title: body.title,
    description: body.description,
    location: body.location,
    category: body.category,
    subCategory: body.subCategory,
    enumerator: body.enumerator,
    approve: body.approve || false,
    date: body.date || new Date(),
  })

  const user = await User.findOne({ username: body.enumerator }, (doc) => doc)

  await report.save()
  user.reportCount += 1
  await user.save()

  res.json(report)
})

// Updating a single report
router.put('/:id', async (req, res) => {
  const { body } = req
  const entries = Object.keys(body)

  const report = await Report.findOne({ _id: req.params.id }, (docs) => docs)

  entries.forEach((el) => {
    report[el] = body[el] || report[el]
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
