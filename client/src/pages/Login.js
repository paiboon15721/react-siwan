import React from 'react'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom'
import { useAuth } from '../stores/authContext'

const Login = () => {
  const history = useHistory()
  const { token, setToken } = useAuth()
  const onLogin = async () => {
    const { data } = await axios.get('http://localhost:3001/login')
    setToken(data.token)
    localStorage.setItem('token', data.token)
    history.push('/')
  }

  if (token) {
    return <Redirect to="/" />
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  )
}

export default Login
