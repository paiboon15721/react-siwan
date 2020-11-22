import React from 'react'
import Container from '../components/Container'
import ErrorContext from '../stores/errorContext'

const AppContext = () => {
  return (
    <ErrorContext.Provider value="error message from value">
      <Container />
    </ErrorContext.Provider>
  )
}

export default AppContext
