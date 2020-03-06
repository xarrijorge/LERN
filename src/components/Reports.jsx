import React from 'react'

const Report = ({ message, handleClick }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const cleanDate = new Date(message.date)
  return (
    <div onClick={handleClick} className="report">
      <p>{message.title}</p>
      <p>{message.location.place}</p>
      <p>{cleanDate.toLocaleDateString('en-us', options)}</p>
      <p>
        Category:{' '}
        {message.category.map((desc, i) => (
          <span key={i}>{desc}</span>
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

  return <div>{reports}</div>
}
export default Reports
