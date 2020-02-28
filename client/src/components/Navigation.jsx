import React from 'react'
import { Link } from '@reach/router'
// import Icon from '@material-ui/core/Icon'
// import '../adjust.css'

export default function Navigation() {
  return (
    <nav id="navigation" className="has-background-dark">
      <Link to="map">Map</Link>
      <Link to="reports">Reports</Link>
      <Link to="stats">Data</Link>
      <Link to="messages"> Messages</Link>
    </nav>
  )
}