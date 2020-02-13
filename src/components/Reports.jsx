import React from 'react'

const Report = ({ message, handleClick }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const cleanDate = new Date(message['INCIDENT DATE'])
  return (
    <div onClick={handleClick} className="report card">
      <p className="title">{message['INCIDENT TITLE']}</p>
      <p className="subtitle tag is-info">{message['LOCATION']}</p>
      <p className="subtitle">
        {cleanDate.toLocaleDateString('en-us', options)}
      </p>
      <p>
        Category:{' '}
        {message.CATEGORY.split(',').map((desc, i) => (
          <span key={i} className="category tag is-warning">
            {desc}
          </span>
        ))}
      </p>
    </div>
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

  return <div className="reportBox">{reports}</div>
}
export default Reports
