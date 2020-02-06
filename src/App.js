import React, { useState, useEffect, Fragment } from 'react'
import reportService from './services/reports'
import './App.css'
// import './adjust.css'
import { Router } from '@reach/router'
import Reports from './components/Reports'
import Details from './components/Details'
import Map from './components/map'
import Navigation from './components/Navigation'

const Dashboard = ({ messages, details, displayContents }) => {
  return (
    <div className="dashboard">
      <Reports handleDisplay={displayContents} messages={messages} />
      <Details details={details} />
    </div>
  )
}
let content = ''

function App() {
  const [messages, setMessages] = useState([])
  const [details, setDetails] = useState({})

  const displayContents = index => {
    content = messages[index]
    console.log(content)
  }

  useEffect(() => {
    reportService.getAll().then(allReports => {
      setMessages(allReports)
      setDetails(content)
      console.log(messages)
    })
  }, [details])

  return (
    <div className="app">
      <Navigation />
      <Router>
        <Dashboard
          messages={messages}
          details={details}
          displayContents={displayContents}
          path="reports"
        />
        <Map path="map" />
      </Router>
    </div>
  )
}

export default App
