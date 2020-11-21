import React from 'react'
import CardList from './components/CardList'

const results = []

const App = () => {
  return (
    <div className="container">
      <CardList results={results} />
    </div>
  )
}

export default App
