import React, { useState } from 'react'

const comments = ['comment1', 'comment2', 'comment3', 'comment4']

const App = () => {
  // const [comments, setComments] = useState([])

  const onSubmit = (e) => {
    console.log('Submit')
  }

  return (
    <div className="container">
      <form className="mt-5" onSubmit={onSubmit}>
        <label className="form-label">Comment Input</label>
        <input type="text" className="form-control" />
      </form>
      {comments.map((v) => (
        <div className="card">
          <div className="card-body">{v}</div>
        </div>
      ))}
    </div>
  )
}

export default App
