import React, { useState } from 'react'
import CardList from './components/CardList'
import SearchBar from './components/SearchBar'
import useDebounced from './hooks/useDebounced'
import useWikiApi from './hooks/useWikiApi'

const App = () => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounced(term, 500)
  const results = useWikiApi(debouncedTerm)

  return (
    <div className="container">
      <h1>Wiki Search App</h1>
      <SearchBar onChange={(v) => setTerm(v)} value={term} />
      <CardList results={results} />
    </div>
  )
}

export default App
