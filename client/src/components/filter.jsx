import React from 'react'
import { Input, Row, Col } from 'antd'

const { Search } = Input

export default function Filter(props) {
  return (
    <div className='filterBox'>
      <Search
        placeholder='input search text'
        enterButton
        size='large'
        onSearch={(value) => console.log(value)}
        className='filterForm'
      />
    </div>
  )
}
