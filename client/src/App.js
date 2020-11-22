import React from 'react'
import Router from './components/Router'
import { AuthProvider } from './stores/authContext'

const token = localStorage.getItem('token')

const App = () => {
  return (
    <AuthProvider token={token}>
      <Router />
    </AuthProvider>
  )
}

export default App
