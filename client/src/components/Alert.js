import React, { useContext } from 'react'
import ErrorContext from '../stores/errorContext'
import { useAuth } from '../stores/authContext'
import { useSelector } from 'react-redux'

const Alert = () => {
  const value = useContext(ErrorContext)
  const { token } = useAuth()
  const counter = useSelector((state) => state.counter)

  return (
    <div className={`alert alert-${token ? 'primary' : 'danger'}`} role="alert">
      {value}, {counter}
    </div>
  )
}

export default Alert
