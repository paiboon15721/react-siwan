import React from 'react'
import { useForm } from 'react-hook-form'

const HookForm = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input
            name="name"
            ref={register({ required: true, maxLength: 10 })}
            type="text"
            className="form-control"
          />
          <p>{errors.name && 'First name is required'}</p>
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">LastName</label>
        <div className="col-sm-10">
          <input
            name="lastName"
            ref={register}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Department</label>
        <div className="col-sm-10">
          <select
            ref={register}
            name="department"
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

export default HookForm
