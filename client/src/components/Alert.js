import React, { useContext } from 'react'
import ErrorContext from '../stores/errorContext'
import { useAuth } from '../stores/authContext'

const Alert = () => {
  const value = useContext(ErrorContext)
  const { token } = useAuth()

  return (
    <div className={`alert alert-${token ? 'primary' : 'danger'}`} role="alert">
      {value}
    </div>
  )
}

export default Alert
