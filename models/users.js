const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    minlength: 5,
    required: true,
  },
  name: {
    type: String,
    minlength: 8,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  lastlogin: Date,
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('User', userSchema)
