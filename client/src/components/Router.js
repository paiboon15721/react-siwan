import React from 'react'
import Table from '../pages/Table'
import WikiApp from '../apps/wiki/App'
import CommentsApp from '../apps/comments/App'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Layout from '../components/Layout'
import Login from '../pages/Login'

const MyRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/table" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/table">
        <Layout>
          <Table />
        </Layout>
      </Route>
      <Route path="/wiki">
        <Layout>
          <WikiApp />
        </Layout>
      </Route>
      <Route path="/comments">
        <Layout>
          <CommentsApp />
        </Layout>
      </Route>
      <Route exact path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  </Router>
)

export default MyRouter
