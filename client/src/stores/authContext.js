import React, { createContext, useContext, useState } from 'react'

const authContext = createContext()

export const AuthProvider = (props) => {
  const [user, setUser] = useState(props.user)

  return (
    <authContext.Provider value={{ user, setUser }}>
      {props.children}
    </authContext.Provider>
  )
}

export const useAuth = () => useContext(authContext)
