import {Schema} from 'mongoose'

const reportSchema = Schema({
  title: {
    type: String,
    require: true
  },
  description: String,
  date: {type: Date, default: Date.now},
  category: {type: [String], require: true},
  location: {
      county: String,
      place: String,
      lat: Number,
      lon: Number
  },
  verify: Boolean,
  approved: Boolean
})

reportSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports mongoose.model('Report', reportSchema);