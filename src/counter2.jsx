import React from 'react'
import { useSelector } from 'react-redux'

function Counter2() {
    const counter = useSelector(state => state.counter.value)
  return (
    <div>counter2 = {counter}</div>
  )
}

export default Counter2