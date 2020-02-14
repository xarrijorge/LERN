import React from 'react'

export default function Filter(props) {
  return (
    <div className="formBox has-background-dark">
      <div className="filterForm">
        <input
          type="search"
          className="input has-background-grey-dark has-text-grey-lighter"
        />
        <button className="button has-background-dark has-text-grey-lighter">
          Search & Filter
        </button>
      </div>
      <div className="fakeLayout"></div>
    </div>
  )
}
