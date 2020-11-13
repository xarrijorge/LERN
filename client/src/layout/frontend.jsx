import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import Reports from '../components/Reports'
import Messages from '../components/Messages'
import Details from '../components/Details'
import Map from '../components/map'
import CreateReport from '../components/forms/CreateReport'
import Data from '../components/data'
import { Layout, Row, Col } from 'antd'
import FrontNav from '../components/Navigation'
import FilterForm from '../components/filter'

const { Header, Sider, Content } = Layout

const MockReport = ({ rmessages, details, displayContents }) => {
  return (
    <div className='reportDisplay'>
      <Reports handleDisplay={displayContents} messages={rmessages} />
      <Details details={details} />
    </div>
  )
}

const Dashboard = ({
  mcontent,
  rmessages,
  details,
  displayContents,
  createReport,
  reportMessage,
}) => {
  return (
    <div className='frontLayout'>
      <FilterForm />
      <Content className='frontContent'>
        <Router>
          <MockReport
            path='/*'
            rmessages={rmessages}
            details={details}
            displayContents={displayContents}
          />
          <Map path='map' />
          <Messages
            path='messages'
            messages={mcontent}
            handleClick={createReport}
          />
          <Data path='stats' />
          <CreateReport path='create' reportMessage={reportMessage} />
        </Router>
      </Content>
    </div>
  )
}

const FrontEnd = ({
  details,
  messages,
  reports,
  displayContents,
  createReport,
  reportMessage,
  LoginUser,
}) => {
  return (
    <Layout>
      <FrontNav />
      <Dashboard
        rmessages={reports}
        mcontent={messages}
        details={details}
        displayContents={displayContents}
        createReport={createReport}
        reportMessage={reportMessage}
      />
    </Layout>
  )
}

export default FrontEnd
