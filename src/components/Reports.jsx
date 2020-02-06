import React, { Fragment } from 'react'

const Report = ({ message, handleClick }) => {
  return (
    <a onClick={handleClick} className="report">
      <p>{message['INCIDENT TITLE']}</p>
      <p>{message['LOCATION']}</p>
      <p>{message['INCIDENT DATE']}</p>
      <p>
        Category:{' '}
        {message.CATEGORY.split(',').map(desc => (
          <span className="category">{desc} | </span>
        ))}
      </p>
    </a>
  )
}

const Reports = props => {
  const reports = props.messages.map((report, index) => (
    <Report
      key={report.id}
      message={report}
      handleClick={props.handleDisplay.bind(this, index)}
      data-id={report['#']}
    />
  ))

  return <div>{reports}</div>
}
export default Reports
