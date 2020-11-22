import React, { useState, useEffect } from 'react'

const ControlledForm = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [department, setDepartment] = useState('3')

  useEffect(() => {
    console.log('Did mount')
  }, [])

  useEffect(() => {
    console.log('Change when typing name')
  }, [name, department])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({
      name,
      lastName,
      department,
    })
    // Get form data
    // Send data to API
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">LastName</label>
        <div className="col-sm-10">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Department</label>
        <div className="col-sm-10">
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="1">Technical</option>
            <option value="2">Accounting</option>
            <option value="3">Manager</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ControlledForm
