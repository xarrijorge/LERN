import React from 'react'
import { Modal } from 'antd'

const Details = ({ details }) => {
  const cleanedDate = details.date
    ? new Date(details.date).toLocaleDateString('en-us')
    : ''
  return (
    <div className='detailsBox'>
      <h2 className='category'>{details.category}</h2>
      <h2 className='category'>{cleanedDate}</h2>
      <h1 className='title'>{details.title}</h1>
      <p className='description'>{details.description}</p>
    </div>
  )
}

export default Details
