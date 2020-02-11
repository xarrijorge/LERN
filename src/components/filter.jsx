import React from 'react'

export default function Filter(props) {
  return (
    <div className="filterForm">
      <form onSubmit={props.addReport}>
        <input type="search" className="input" />
        <button>Search & Filter</button>
      </form>
    </div>
  )
}
