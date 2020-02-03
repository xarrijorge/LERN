import React, { useState, useEffect } from 'react'
import './App.css'
import Report from './components/Report'
import Map from './components/map'

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
  }
]
function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    setMessages(reports)
  }, [])
  const data = messages.map(report => (
    <Report key={report.id} message={report} />
  ))

  return (
    <div className="App">
      <Map></Map>{' '}
    </div>
  )
}

export default App
