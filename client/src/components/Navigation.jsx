import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import { useState } from 'react'

import { Layout, Menu } from 'antd'
import {
  ProfileOutlined,
  MessageOutlined,
  AreaChartOutlined,
  EnvironmentOutlined,
  LoginOutlined,
} from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'

import MenuItem from 'antd/lib/menu/MenuItem'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export default function FrontNav() {
  const [state, setState] = useState({ collapsed: false })
  const { loginWithRedirect } = useAuth0()

  const onCollapse = (collapsed) => {
    setState({ collapsed })
  }

  return (
    <Fragment>
      <Sider
        style={{ minHeight: '100vh' }}
        collapsible
        collapsed={state.collapsed}
        onCollapse={onCollapse}
        breakpoint='lg'
        collapsedWidth='0'
      >
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <MenuItem>
            <EnvironmentOutlined
              className='menu-icon'
              style={{ fontSize: '24px' }}
            />
            <Link to='map'>Map</Link>
          </MenuItem>
          <MenuItem>
            <MessageOutlined
              className='menu-icon'
              style={{ fontSize: '24px' }}
            />
            <Link to='messages'>Messages</Link>
          </MenuItem>
          <MenuItem>
            <ProfileOutlined
              className='menu-icon'
              style={{ fontSize: '24px' }}
            />
            <Link to='reports'>Reports</Link>
          </MenuItem>

          <MenuItem>
            <AreaChartOutlined
              className='menu-icon'
              style={{ fontSize: '24px' }}
            />
            <Link to='stats'>Data</Link>
          </MenuItem>
          <MenuItem onClick={() => loginWithRedirect()}>
            <LoginOutlined className='menu-icon' style={{ fontSize: '24px' }} />
            Login
          </MenuItem>
        </Menu>
      </Sider>
    </Fragment>
  )
}
