import React from 'react'
import Card from './Card'

const CardList = ({ results }) => {
  return (
    <div className="row mt-0 g-3">
      {results.map((v) => (
        <div className="col-12">
          <Card title={v.title} text={v.snippet} />
        </div>
      ))}
    </div>
  )
}

export default CardList
