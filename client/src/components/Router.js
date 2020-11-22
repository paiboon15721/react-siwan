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
import ManagerRoute from './ManagerRoute'

const MyRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/table" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {menus.map((v) => {
          if (v.allowRoles.includes('guest')) {
            return (
              <PrivateRoute path={v.path} key={v.path}>
                <Layout>
                  <v.component />
                </Layout>
              </PrivateRoute>
            )
          } else {
            return (
              <ManagerRoute path={v.path} key={v.path}>
                <Layout>
                  <v.component />
                </Layout>
              </ManagerRoute>
            )
          }
        })}
        <Route exact path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default MyRouter
