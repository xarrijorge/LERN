const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    minlength: 5,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    minlength: 8,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
    minlength: 8,
  },
  lastlogin: Date,
  reportCount: {
    type: Number,
    default: 0,
  },
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('User', userSchema)
