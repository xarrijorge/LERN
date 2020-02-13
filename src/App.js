import React, { useState, useEffect, Fragment } from 'react'
import reportService from './services/reports'
import messageService from './services/messages'
import './App.css'
import 'bulma/css/bulma.css'

import { Router } from '@reach/router'
import Reports from './components/Reports'
import Details from './components/Details'
import Map from './components/map'
import Navigation from './components/Navigation'
import FilterNav from './components/filter'
import Data from './components/data'
import Messages from './components/Messages'
import Create from './components/Create'

const Dashboard = ({ messages, details, displayContents }) => {
  return (
    <div className="columns column">
      <Reports
        handleDisplay={displayContents}
        messages={messages}
        className="column report box"
      />
      <Details details={details} className="column has-background-white-bis" />
    </div>
  )
}
let content = ''
let editorMessage = ''

function App() {
  const [messages, setMessages] = useState([])
  const [reports, setReports] = useState([])
  const [details, setDetails] = useState({})
  const [editorText, setEditorText] = useState('')

  const displayContents = index => {
    content = reports[index]
  }

  const createReport = index => {
    console.log(reports[index])
  }

  useEffect(() => {
    reportService.getAll().then(allReports => {
      setReports(allReports)
      setDetails(content)
    })
  }, [reports, editorText])

  useEffect(() => {
    messageService.getAll().then(allMessaes => {
      setMessages(allMessaes)
      setEditorText(editorMessage)
      console.log(editorText)
    })
  }, [])

  return (
    <Fragment>
      <FilterNav />
      <Navigation className="column has-background-link" />
      <Router>
        <Dashboard
          messages={reports}
          details={details}
          displayContents={displayContents}
          path="reports"
        />
        <Messages
          path="messages"
          messages={messages}
          handleClick={createReport}
        />
        <Map path="map" />
        <Data path="stats" />
        <Create path="create" reportMessage={editorText} />
      </Router>
    </Fragment>
  )
}

export default App
