import React, { useState, useEffect, Fragment } from 'react'
import reportService from './services/reports'
import './App.css'
import 'bulma/css/bulma.css'

import { Router } from '@reach/router'
import Reports from './components/Reports'
import Details from './components/Details'
import Map from './components/map'
import Navigation from './components/Navigation'
import FilterNav from './components/filter'
import CreateReport from './components/Create'
import Data from './components/data'

const Dashboard = ({ messages, details, displayContents }) => {
  return (
    <div className="column">
      <Reports
        handleDisplay={displayContents}
        messages={messages}
        className="column"
      />
      <Details details={details} className="column has-background-white-bis" />
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
    <Fragment>
      <FilterNav />
      <Navigation className="column has-background-link" />
      <Router>
        <Dashboard
          messages={messages}
          details={details}
          displayContents={displayContents}
          path="reports"
        />
        <Map path="map" />
      </Router>
    </Fragment>
  )
}

export default App
