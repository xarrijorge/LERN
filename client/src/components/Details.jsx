import React from 'react'

const Details = ({ details }) => {
  return (
    <div className='detailsBox'>
      <h2 className='category'>{details.category}</h2>
      <h2 className='category'>{details.date}</h2>
      <h1 className='title'>{details.title}</h1>
      <p className='description'>{details.description}</p>
    </div>
  )
}

export default Details
