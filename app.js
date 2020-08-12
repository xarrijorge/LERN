const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const messagesRouter = require('./routes/messages')
const reportsRouter = require('./routes/reports')
const reportersRouter = require('./routes/reporters')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use('/', indexRouter)
app.use('/messages', messagesRouter)
app.use('/users', usersRouter)
app.use('/reports', reportsRouter)
app.use('/reporters', reportersRouter)

module.exports = app
