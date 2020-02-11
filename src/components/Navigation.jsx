import React from 'react'
import { Link } from '@reach/router'
// import Icon from '@material-ui/core/Icon'
// import '../adjust.css'

export default function Navigation() {
  return (
    <nav id="navigation">
      <Link to="map">Map</Link>
      <Link to="reports">Reports</Link>
      <Link to="data">Data</Link>
      <Link to="create"> New Report</Link>
    </nav>
  )
}
