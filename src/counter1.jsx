
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from './Redux/counterSlice';
function Counter1() {
    const counter = useSelector(state => state.counter.value)
    console.log(counter);
    const dispatch = useDispatch()
  return (
    <div>counter1 = {counter }
    <br />
    <button onClick={() => dispatch(counterSlice.actions.increment())}>++++</button>
    <button onClick={() => dispatch(counterSlice.actions.decrement())}>----</button>
    <button onClick={() => dispatch(counterSlice.actions.incrementByamount(4))}>amount</button>


     </div>
  )
}

export default Counter1