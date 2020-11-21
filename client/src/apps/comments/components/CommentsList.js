import React from 'react'

const CommentsList = ({ comments }) => {
  return comments.map((v, i) => (
    <div className="col-sm-6" key={i}>
      <div className="card">
        <div className="card-body">{v}</div>
      </div>
    </div>
  ))
}

export default CommentsList
