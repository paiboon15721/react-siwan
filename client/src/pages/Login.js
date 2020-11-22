import React from 'react'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom'
import { useAuth } from '../stores/authContext'

const Login = () => {
  const history = useHistory()
  const { user, setUser } = useAuth()
  const onLogin = async (role) => {
    const { data } = await axios.get(`http://localhost:3001/${role}`)
    setUser(data)
    localStorage.setItem('user', JSON.stringify(data))
    history.push('/')
  }

  if (user) {
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
      <button
        onClick={() => onLogin('manager')}
        className="btn btn-danger ml-3"
      >
        Manager
      </button>
      <button onClick={() => onLogin('guest')} className="btn btn-primary">
        Guest
      </button>
    </div>
  )
}

export default Login
