import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import Icon from '@material-ui/core/Icon'

export default function Navigation() {
  return (
    <Fragment>
      <nav>
        <moreHorizIcon />
        <Link to="/map">
          <Icon color="primary" fontSize="large">
            location_on
          </Icon>
          Map
        </Link>
        <Link to="/reports">
          {' '}
          <Icon color="primary" fontSize="large">
            list_alt
          </Icon>
          Reports
        </Link>
      </nav>
    </Fragment>
  )
}
