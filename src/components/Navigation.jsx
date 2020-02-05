import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import Icon from '@material-ui/core/Icon'
// import '../adjust.css'

export default function Navigation() {
  return (
    <Fragment>
      <nav id="navigation" className="bg-silver col-1">
        <Link to="map">
          <Icon color="primary" fontSize="large">
            location_on
          </Icon>
          Map
        </Link>
        <Link to="reports">
          <Icon color="primary" fontSize="large">
            list_alt
          </Icon>
          Reports
        </Link>
      </nav>
    </Fragment>
  )
}
