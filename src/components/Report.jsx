import React from 'react'

const Report = ({ message }) => {
  return (
    <div className="report">
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
    </div>
  )
}

export default Report
