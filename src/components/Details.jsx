import React from 'react'

const Details = ({ details }) => {
  return (
    <div className="detailsBox">
      <h1>{details['INCIDENT TITLE']}</h1>
      <p>{details.DESCRIPTION}</p>
      {/* <p>
        {details['CATEGORY'].split(',').map((desc, i) => (
          <span key={i} className="category">
            {desc} |
          </span>
        ))}
      </p> */}
    </div>
  )
}

export default Details
