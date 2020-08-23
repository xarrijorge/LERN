const express = require('express')

const router = express.Router()
const Reporter = require('../models/reporters')

// Getting a list of all reporters
router.get('/', async (req, res) => {
  const reporters = await Reporter.find({})
  res.json(reporters)
})

// Gettin a reporter's data
router.get('/:id', async (req, res) => {
  const reporter = await Reporter.findById(req.params.id)
  return reporter ? res.json(reporter) : res.status(404).end()
})

// Adding a reporter
router.post('/', async (req, res) => {
  const { body } = req

  const reporter = new Reporter({ ...body })

  await reporter.save()
  res.json(reporter)
})

// Updating a reporter's data
router.put('/:id', (req, res, next) => {
  const { body } = req
  const reporter = { ...body }

  Reporter.findByIdAndUpdate(req.params.id, reporter, { new: true })
    .then((updatedReporter) => res.json(updatedReporter))
    .catch((error) => next(error))
})

// Removing a reporter
router.delete('/:id', async (req, res) => {
  await Reporter.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

module.exports = router
