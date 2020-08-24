import React, { useState, useEffect, Fragment } from 'react'
import reportService from './services/reports'
import messageService from './services/messages'
import './App.scss'

import { navigate } from '@reach/router'
import FrontEnd from './layout/frontend'

let content = ''
let editorMessage = ''

function App() {
  const [messages, setMessages] = useState([])
  const [reports, setReports] = useState([])
  const [details, setDetails] = useState('this means war!')
  const [editorText, setEditorText] = useState('')

  const displayContents = (index) => {
    content = reports[index]
  }

  const createReport = (index) => {
    editorMessage = messages[index]
    setEditorText(editorMessage)
    navigate('/create')
  }

  useEffect(() => {
    reportService.getAll().then((allReports) => {
      setReports(allReports.data)
      setDetails({ ...content })
    })
  }, [reports])

  useEffect(() => {
    messageService.getAll().then(
      (allMessages) => {
        setMessages(allMessages.data)
      },
      [0]
    )
  })

  return (
    <Fragment>
      <FrontEnd
        details={details}
        reports={reports}
        messages={messages}
        displayContents={displayContents}
        createReport={createReport}
        reportMessage={editorText}
      />
    </Fragment>
  )
}

export default App
