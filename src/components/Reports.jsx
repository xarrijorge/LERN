import React, { Fragment } from 'react'

const Report = ({ message, handleClick }) => {
  return (
    <a onClick={handleClick} className="report">
      <p>{message.title}</p>
      <p>
        {message.county}, {message.location}
      </p>
      <p>{new Date(message.date).toDateString()}</p>
      <p>
        Category:{' '}
        {message.category.map(desc => (
          <span className="category">{desc} | </span>
        ))}
      </p>
    </a>
  )
}

const Reports = ({ messages, handleDisplay }) => {
  const reports = messages.map(report => (
    <Report key={report.id} message={report} handleClick={handleDisplay} />
  ))

  return (
    <div className="row">
      <div>{reports}</div>
      <div>
        <h1>Testing</h1>
      </div>
    </div>
  )
}
export default Reports
