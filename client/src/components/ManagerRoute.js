import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../stores/authContext'

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()
  return (
    <Route
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
