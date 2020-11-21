import React from 'react'

const Card = ({ title, text, pageid }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        <a
          href={`https://en.wikipedia.org?curid=${pageid}`}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Go to wiki page
        </a>
      </div>
    </div>
  )
}
export default Card
