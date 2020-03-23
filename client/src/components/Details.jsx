import React from 'react'

const Details = ({ details }) => {
  return (
    <div className="detailsBox">
      <h1>{details.title}</h1>
      <p>{details.description}</p>
      <p>{details.cateory}</p>
    </div>
  )
}

export default Details
