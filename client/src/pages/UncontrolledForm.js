import React, { useRef, useEffect } from 'react'

const UncontrolledForm = () => {
  const name = useRef(null)
  const lastName = useRef(null)
  const department = useRef(null)

  useEffect(() => {
    lastName.current.focus()
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({
      name: name.current.value,
      lastName: lastName.current.value,
      department: department.current.value,
    })
    // Get form data
    // Send data to API
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input ref={name} type="text" className="form-control" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">LastName</label>
        <div className="col-sm-10">
          <input ref={lastName} type="text" className="form-control" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Department</label>
        <div className="col-sm-10">
          <select
            ref={department}
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

export default UncontrolledForm
