import React, { useState } from 'react'
import CardList from './components/CardList'
import useDebounced from './hooks/useDebounced'
import useWikiApi from './hooks/useWikiApi'

const App = () => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounced(term, 500)
  const results = useWikiApi(debouncedTerm)

  return (
    <div className="container">
      <h1>Wiki Search App</h1>
      <div>
        <label className="form-label">Search Bar</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>
      <CardList results={results} />
    </div>
  )
}

export default App
