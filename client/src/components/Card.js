import React, { useEffect, useState } from 'react'
import Alert from './Alert'
import { connect } from 'react-redux'
import * as actions from '../actions'
import CardList from '../apps/wiki/components/CardList'
import useDebounced from '../apps/wiki/hooks/useDebounced'

const Card = (props) => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounced(term, 500)

  useEffect(() => {
    if (debouncedTerm) {
      props.fetchWiki(debouncedTerm)
    }
  }, [debouncedTerm])

  return (
    <div className="card">
      <div className="card-title">My Card {props.counter}</div>
      <div className="card-body">
        <Alert />
        <button className="btn btn-primary" onClick={props.increment}>
          Inc
        </button>
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          className="form-control"
        />
        <CardList results={props.wiki} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter,
  wiki: state.wiki,
})

export default connect(mapStateToProps, actions)(Card)
