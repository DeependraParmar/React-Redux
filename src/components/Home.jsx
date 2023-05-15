import React from 'react';
import { useDispatch,useSelector} from 'react-redux';

export default function Home() {
    let {c} = useSelector(state => state.custom);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'increment' });
    }
    const decrement = () => {
        dispatch({ type: 'decrement' });
    }
    const incrementByValue = () => {
        dispatch({ type: 'incrementByValue', payload: 5 });
    }
    const decrementByValue = () => {
        dispatch({ type: 'decrementByValue', payload: 5 });
    }


  return (
    <div>
      <h2>{c}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementByValue}>Increment By Value</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementByValue}>Decrement By Value</button>
    </div>
  )
}
