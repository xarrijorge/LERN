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
    <form className="container">
      <p className="field">
        <label className="label">Title</label>{' '}
        <input type="text" className="input" required />
      </p>
      <p className="field">
        <label className="label">Report</label>
        <textarea
          name="report"
          cols="10"
          rows="5"
          className="textarea"
          defaultValue={props.reportMessage.message}
          required
        >
          {props.message}
        </textarea>
      </p>
      <p className="field">
        <label className="label">County</label>
        <select name="county" id="couonty">
          {countyData}
        </select>
      </p>
      <p className="field">
        <label className="label">Location</label>
        <input
          type="text"
          className="input"
          placeholder="District | City | Town"
        />
      </p>
      <p className="field select is-multiple">
        <label className="label">Category</label>
        <select name="category" id="category" multiple size="8">
          {categoriesData}
        </select>
      </p>
      <p className="field">
        <label className="label">Date</label>
        <input type="date" className="date" />
      </p>
      <button type="submit" className="button is-primary">
        Submit
      </button>
    </form>
  )
}

export default CreateReport
