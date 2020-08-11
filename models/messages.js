const mongoose = require('mongoose')

const { Schema } = mongoose

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const messageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: Date,
})

messageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Message', messageSchema)
