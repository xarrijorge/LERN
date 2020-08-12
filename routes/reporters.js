const express = require('express')

const router = express.Router()
const Reporter = require('../models/reporters')

// Getting a list of all reporters
router.get('/', (req, res) => {
  Reporter.find({}).then((reporters) => res.json(reporters))
})

// Gettin a reporter's data
router.get('/:id', (req, res, next) => {
  Reporter.findById(req.params.id)
    .then((reporter) => res.json(reporter))
    .catch((error) => next(error))
})

// Adding a reporter
router.post('/', (req, res) => {
  const { body } = req

  const reporter = new Reporter({ ...body })

  reporter.save().then((savedReporter) => res.json(savedReporter))
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
router.delete('/:id', (req, res, next) => {
  Reporter.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error))
})

module.exports = router
