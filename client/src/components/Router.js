import React from 'react'
import Table from '../pages/Table'
import WikiApp from '../apps/wiki/App'
import CommentsApp from '../apps/comments/App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Login from '../pages/Login'

const MyRouter = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Layout>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/wiki">
          <WikiApp />
        </Route>
        <Route path="/comments">
          <CommentsApp />
        </Route>
      </Layout>
    </Switch>
  </Router>
)

export default MyRouter
