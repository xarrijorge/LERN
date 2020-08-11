const mongoose = require('mongoose')

const { Schema } = mongoose

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

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
