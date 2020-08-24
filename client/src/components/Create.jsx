import React from 'react'
import { counties, categories } from '../utils/category'

const CreateReport = (props) => {
  const countyData = counties.map((county, index) => (
    <option key={index} value={county}>
      {county}
    </option>
  ))

  const categoriesData = categories.map((category, index) => (
    <option key={index} value={category}>
      {category}
    </option>
  ))

  return (
    <form>
      <textarea name='' id='' cols='30' rows='10'>
        {props.reportMessage.content}
      </textarea>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default CreateReport
