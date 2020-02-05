import React, { Fragment } from 'react'
import { Link } from '@reach/router'

export default function Navigation() {
  return (
    <Fragment>
      <nav>
        <Link to="/map">Map</Link>
        <Link to="/reports">Reports</Link>
      </nav>
    </Fragment>
  )
}
