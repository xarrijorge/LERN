import React from 'react'

const Report = ({ message, handleClick }) => {
  return (
    <div onClick={handleClick} className="report">
      <p>{message['INCIDENT TITLE']}</p>
      <p>{message['LOCATION']}</p>
      <p>{message['INCIDENT DATE']}</p>
      <p>
        Category:{' '}
        {message.CATEGORY.split(',').map((desc, i) => (
          <span key={i} className="category">
            {desc} |{' '}
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
      data-id={report['#']}
    />
  ))

  return <div className="reportBox">{reports}</div>
}
export default Reports
