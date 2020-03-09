import React from 'react'
import { Card, Tag } from 'antd'
import { categories } from '../utils/category'

const Report = ({ message, handleClick }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const cleanDate = new Date(message.date)

  const catData = message.category.map((desc, i) => {
    let catColor = categories.find(cat => cat.name === desc).color
    return (
      <Tag key={i} color={catColor} className="tag">
        {desc}
      </Tag>
    )
  })

  return (
    <>
      <Card
        title={message.title}
        onClick={handleClick}
        hoverable
        style={{ margin: '5px 0' }}
      >
        <Tag color="#108ee9" className="tag">
          {message.location.place}
        </Tag>
        <Tag color="#67d068" className="tag">
          {cleanDate.toLocaleDateString('en-us', options)}
        </Tag>
        <p>Category: {catData}</p>
      </Card>
    </>
  )
}

const Reports = props => {
  const reports = props.messages.map((report, index) => (
    <Report
      key={index}
      message={report}
      handleClick={props.handleDisplay.bind(this, index)}
    />
  ))

  return <div className="reportsBox">{reports}</div>
}
export default Reports
