import React, { useEffect, useState } from 'react'
import CardList from './components/CardList'
import wikiApi from './wikiApi'

const App = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const results = await wikiApi('cat')
      setResults(results)
    }
    fetchData()
  }, [])

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
