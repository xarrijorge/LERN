import React, { useState, useEffect } from 'react'
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
  }

  useEffect(() => {
    reportService.getAll().then(allReports => {
      setMessages(allReports)
      setDetails(content)
    })
  }, [messages])

  return (
    <div className="app">
      <Navigation />
      <Router>
        <Dashboard
          messages={messages}
          details={details}
          displayContents={displayContents}
          path="/*"
        />
        <Map path="map" />
      </Router>
    </div>
  )
}

export default App
