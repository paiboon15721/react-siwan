import React, { useState } from 'react'

const App = () => {
  const [comments, setComments] = useState([])
  const [currentComment, setCurrentComment] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setCurrentComment('')
    setComments([currentComment, ...comments])
  }

  const onCommentChange = (e) => {
    setCurrentComment(e.target.value)
  }

  return (
    <div className="container">
      <form className="mt-5" onSubmit={onSubmit}>
        <label className="form-label">Comment Input</label>
        <input
          type="text"
          value={currentComment}
          className="form-control"
          onChange={onCommentChange}
        />
      </form>
      {comments.map((v, i) => (
        <div className="card" key={i}>
          <div className="card-body">{v}</div>
        </div>
      ))}
    </div>
  )
}

export default App
