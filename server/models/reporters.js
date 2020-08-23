const mongoose = require('mongoose')

const { Schema } = mongoose

const reporterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  maincontact: {
    type: String,
    required: true,
  },
  othernums: [],
  email: String,
  county: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Reporter', reporterSchema)
