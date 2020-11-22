import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const App = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-4">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default App
