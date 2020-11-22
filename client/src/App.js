import React from 'react'
import Layout from './components/Layout'
import Table from './pages/Table'
import WikiApp from './apps/wiki/App'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/wiki">
            <WikiApp />
          </Route>
        </Switch>
      </Router>
    </Layout>
  )
}

export default App
