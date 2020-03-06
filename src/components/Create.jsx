import React from 'react'
import { counties, categories } from '../utils/category'
const CreateReport = props => {
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
      <p>
        <label>Title</label> <input type="text" required />
      </p>
      <p>
        <label>Report</label>
        <textarea
          name="report"
          cols="10"
          rows="5"
          defaultValue={props.reportMessage.message}
          required
        >
          {props.message}
        </textarea>
      </p>
      <p>
        <label>County</label>
        <select name="county" id="couonty">
          {countyData}
        </select>
      </p>
      <p>
        <label>Location</label>
        <input type="text" placeholder="District | City | Town" />
      </p>
      <p>
        <label>Category</label>
        <select name="category" id="category" multiple size="8">
          {categoriesData}
        </select>
      </p>
      <p className="field">
        <label>Date</label>
        <input type="date" />
      </p>
      <button type="submit">Submit</button>
    </form>
  )
}

export default CreateReport
