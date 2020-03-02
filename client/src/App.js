import React, { useState, useEffect, Fragment } from 'react'
import reportService from './services/reports'
import messageService from './services/messages'
import './App.css'
import 'bulma/css/bulma.css'

import { Router, navigate } from '@reach/router'
import Reports from './components/Reports'
import Details from './components/Details'
import Map from './components/map'
import Navigation from './components/Navigation'
import FilterNav from './components/filter'
import Data from './components/data'
import Messages from './components/Messages'
import Create from './components/Create'
import Login from './components/login'

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
      <FilterNav />
      <Navigation className="column has-background-link" />
      <Router>
        <Dashboard
          messages={reports}
          details={details}
          displayContents={displayContents}
          path="/*"
        />
        <Messages
          path="messages"
          messages={messages}
          handleClick={createReport}
        />
        <Map path="map" />
        <Data path="stats" />
        <Create path="create" reportMessage={editorText} />
        <Login path="login" />
      </Router>
    </Fragment>
  )
}

export default App
