import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
// import './App.css'
// import './adjust.css'
import { Router } from '@reach/router'
import Reports from './components/Reports'
import Map from './components/map'
import Navigation from './components/Navigation'

const reports = [
  {
    title: '12 Years Old Girl Raped in Ganta',
    county: 'Nimba',
    category: ['Rape', 'SGBV', 'Domestic violence'],
    date: Date.now(),
    location: 'Bain Garr District',
    id: 1
  },
  {
    title: '12 Years Old Girl Raped in Ganta',
    county: 'Nimba',
    category: ['Rape', 'SGBV', 'Domestic violence'],
    date: Date.now(),
    location: 'Bain Garr District',
    id: 2
  },
  {
    title: '12 Years Old Girl Raped in Ganta',
    county: 'Nimba',
    category: ['Rape', 'SGBV', 'Domestic violence'],
    date: Date.now(),
    location: 'Bain Garr District',
    id: 3
  },
  {
    title: '12 Years Old Girl Raped in Ganta',
    county: 'Nimba',
    category: ['Rape', 'SGBV', 'Domestic violence'],
    date: Date.now(),
    location: 'Bain Garr District',
    id: 4
  },
  {
    title: '12 Years Old Girl Raped in Ganta',
    county: 'Nimba',
    category: ['Rape', 'SGBV', 'Domestic violence'],
    date: Date.now(),
    location: 'Bain Garr District',
    id: 5
  },
  {
    title: '12 Years Old Girl Raped in Ganta',
    county: 'Nimba',
    category: ['Rape', 'SGBV', 'Domestic violence'],
    date: Date.now(),
    location: 'Bain Garr District',
    id: 6
  },
  {
    title: '12 Years Old Girl Raped in Ganta',
    county: 'Nimba',
    category: ['Rape', 'SGBV', 'Domestic violence'],
    date: Date.now(),
    location: 'Bain Garr District',
    id: 7
  }
]

function App() {
  const [messages, setMessages] = useState([])

  const displayContents = () => {
    alert('testing 123!')
  }
  useEffect(() => {
    setMessages(reports)
  }, [])

  return (
    <div className="row">
      <Navigation />
      <Router>
        <Reports
          handleDisplay={displayContents}
          messages={reports}
          path="reports"
        />
        <Map path="map" />
      </Router>
    </div>
  )
}

export default App
