import React from 'react'

const SearchBar = ({ onChange, value }) => (
  <div>
    <label className="form-label">Search Bar</label>
    <input
      className="form-control"
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  </div>
)

export default SearchBar
