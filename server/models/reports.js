const mongoose = require('mongoose')

const { Schema } = mongoose

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const reportSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    place: String,
    county: String,
    coordinates: [Number],
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: [],
  date: {
    type: Date,
    required: true,
  },
  enumerator: String,
  approve: Boolean,
})

/* eslint no-param-reassign: off */

reportSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})
module.exports = mongoose.model('Report', reportSchema)
