import React from 'react'

const CreateReport = props => {
  return (
    <form className="container">
      <p>
        Title <input type="text" className="input" />
      </p>
      <p>
        Report
        <textarea name="report" cols="30" rows="10" className="textarea">
          {props.message}
        </textarea>
      </p>
    </form>
  )
}

export default CreateReport
