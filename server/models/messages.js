import { Schema } from 'mongoose'

const messageSchema = Schema({
  message: {
    type: String,
    require: true
  },
  date: { type: Date, default: Date.now }
})

messageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
