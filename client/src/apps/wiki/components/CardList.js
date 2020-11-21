import React from 'react'
import Card from './Card'

const CardList = ({ results }) => {
  console.log(results)
  return (
    <div className="row mt-0 g-3">
      {results.map((v) => (
        <div className="col-md-4" key={v.pageid}>
          <Card
            special={v.pageid % 2 === 0}
            title={v.title}
            text={v.snippet}
            pageid={v.pageid}
          />
        </div>
      ))}
    </div>
  )
}

export default CardList
