import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Table from '../../pages/Table'

const App = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-4">
            <Table />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
