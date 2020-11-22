import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../stores/authContext'

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth()
  return (
    <Route
      {...rest}
      render={() => {
        if (user.role === 'manager') {
          return children
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export default PrivateRoute
