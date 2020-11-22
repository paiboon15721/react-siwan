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
import PrivateRoute from './PrivateRoute'

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
        <PrivateRoute path={v.path} key={v.path}>
          <Layout>
            <v.component />
          </Layout>
        </PrivateRoute>
      ))}
      <Route exact path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  </Router>
)

export default MyRouter
