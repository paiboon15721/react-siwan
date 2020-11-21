import React, { useState } from 'react'
import CommentText from './components/CommentText'
import CommentsList from './components/CommentsList'

const App = () => {
  const [comments, setComments] = useState([])

  const onSubmit = (currentComment) => {
    setComments([currentComment, ...comments])
  }

  return (
    <div className="container">
      <div className="row">
        <CommentText handleSubmit={onSubmit} />
      </div>
      <div className="row mt-0 g-2">
        <CommentsList comments={comments} />
      </div>
    </div>
  )
}

export default App
