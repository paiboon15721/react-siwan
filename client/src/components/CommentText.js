import React, { useState } from 'react'

const CommentText = ({ handleSubmit }) => {
  const [currentComment, setCurrentComment] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setCurrentComment('')
    handleSubmit(currentComment)
  }

  const onCommentChange = (e) => {
    setCurrentComment(e.target.value)
  }

  return (
    <form className="mt-5" onSubmit={onSubmit}>
      <label className="form-label">Comment Input</label>
      <input
        type="text"
        value={currentComment}
        className="form-control"
        onChange={onCommentChange}
      />
    </form>
  )
}

export default CommentText
