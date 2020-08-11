require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const messagesRouter = require('./routes/messages')
const reportsRouter = require('./routes/reports')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/messages', messagesRouter)
app.use('/users', usersRouter)
app.use('/reports', reportsRouter)

const port = process.env.PORT || 3001

app.listen(port, () => `Server running on port ${port} `)
