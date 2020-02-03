import React from 'react'

const Report = ({ message }) => {
  return (
    <div className="report">
      <h2>{message.title}</h2>
      <h3>{message.county}</h3>
      <p>{message.location}</p>
      <h4>{new Date(message.date).toDateString()}</h4>
      <p>
        Category:{' '}
        {message.category.map(desc => (
          <span className="category">{desc} | </span>
        ))}
      </p>
    </div>
  )
}

export default Report
