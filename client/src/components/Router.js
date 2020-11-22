import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Layout from '../components/Layout'
import Login from '../pages/Login'
import menus from '../config/menus'

const MyRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/table" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {menus.map((v) => (
        <Route path={v.path} key={v.path}>
          <Layout>
            <v.component />
          </Layout>
        </Route>
      ))}
      <Route exact path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  </Router>
)

export default MyRouter
