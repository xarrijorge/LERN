import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import Reports from '../components/Reports'
import Details from '../components/Details'
import Map from '../components/map'
import Data from '../components/data'
import Login from '../components/login'
import { Layout, Row, Col } from 'antd'
import FrontNav from '../components/Navigation'
import FilterForm from '../components/filter'

const { Header, Sider, Content } = Layout

const Dashboard = ({ messages, details, displayContents }) => {
  return (
    <Layout className="frontLayout">
      <FilterForm />
      <Content className="frontContent">
        <Row gutter={16}>
          <Col span={8}>
            <Reports handleDisplay={displayContents} messages={messages} />
          </Col>
          <Col span={12}>
            <Details details={details} />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

const FrontEnd = ({ details, reports, displayContents, LoginUser }) => {
  return (
    <Layout>
      <FrontNav />
      <Dashboard
        messages={reports}
        details={details}
        displayContents={displayContents}
        path="/*"
      />
    </Layout>
  )
}

export default FrontEnd
