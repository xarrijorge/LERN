import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import BackNav from './components/navigation'

const Dashboard = () => {
  return (
    <Fragment>
      <BackNav />
      <Router>
        <Dashboard
          messages={reports}
          details={details}
          displayContents={displayContents}
          path="/*"
        />
      </Router>
    </Fragment>
  )
}
