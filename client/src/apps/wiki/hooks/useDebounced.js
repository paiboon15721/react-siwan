import { useState, useEffect } from 'react'

const useDebounced = (value, timeout) => {
  const [debouncedTerm, setDebouncedTerm] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedTerm(value)
    }, timeout)
    return () => {
      clearTimeout(id)
    }
  }, [value, timeout])

  return debouncedTerm
}

export default useDebounced
