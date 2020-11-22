import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TryRedux = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      Count: {counter}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </>
  )
}

export default TryRedux
