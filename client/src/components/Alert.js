import React, { useContext } from 'react'
import ErrorContext from '../stores/errorContext'

const Alert = () => {
  const value = useContext(ErrorContext)

  return (
    <div className="alert alert-primary" role="alert">
      {value}
    </div>
  )
}

export default Alert
