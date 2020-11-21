import React from 'react'
import ReactDOM from 'react-dom'
import './scss/custom.scss'

const App = () => {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <h1>สวัสดี world</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
