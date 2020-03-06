import React, { useState, useEffect, Fragment } from 'react'
import reportService from './services/reports'
import messageService from './services/messages'
import './App.css'

import { Router, navigate } from '@reach/router'
import FilterNav from './components/filter'
import FrontEnd from './layout/frontend'
import Messages from './components/Messages'
import Create from './components/Create'

let content = ''
let editorMessage = ''

function App() {
  const [messages, setMessages] = useState([])
  const [reports, setReports] = useState([])
  const [details, setDetails] = useState({})
  const [editorText, setEditorText] = useState('')

  const LoginUser = event => {
    event.preventDefault()
    alert('testing')
  }

  const displayContents = index => {
    content = reports[index]
    editorMessage = messages[index]
  }

  const createReport = index => {
    editorMessage = messages[index]
    navigate('/create')
  }

  useEffect(() => {
    reportService.getAll().then(allReports => {
      setReports(allReports.data)
      setDetails(content)
    })
  }, [reports, editorText])

  // useEffect(() => {
  //   messageService.getAll().then(allMessages => {
  //     console.log('messages are', allMessages)
  //     setMessages(allMessages)
  //     setEditorText(editorMessage)
  //   })
  // }, [messages])

  return (
    <Fragment>
      <FrontEnd
        details={details}
        reports={reports}
        displayContents={displayContents}
        LoginUser={LoginUser}
      />
    </Fragment>
  )
}

export default App
