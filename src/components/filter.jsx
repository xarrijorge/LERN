import React from 'react'

export default function Filter(props) {
  return (
    <div className="container formBox">
      <div className="form columns">
        <input
          type="search"
          className="input column is-3-fifth has-background-grey-dark has-text-grey-lighter"
        />
        <button className="button has-background-dark has-text-grey-lighter">
          Search & Filter
        </button>
      </div>
    </div>
  )
}
