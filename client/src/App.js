import React from 'react'
import Router from './components/Router'
import { AuthProvider } from './stores/authContext'

const user = localStorage.getItem('user')

const App = () => {
  return (
    <AuthProvider user={JSON.parse(user)}>
      <Router />
    </AuthProvider>
  )
}

export default App
