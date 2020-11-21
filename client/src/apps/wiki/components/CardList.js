import React from 'react'
import Card from './Card'

const CardList = ({ results }) => {
  return (
    <div className="row g-3">
      {results.map((v) => (
        <div className="col-12">
          <Card
            title="title1"
            text="With supporting text below as a natural lead-in to additional content."
          />
        </div>
      ))}
    </div>
  )
}

export default CardList
