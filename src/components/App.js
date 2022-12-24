import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';


const App = () => {
const [state,dispatch] = useReducer(counterReducer, 0)
  return (
    <div id="main">
        <span className="counter">{state}</span>
        <button id='increment-btn' onClick={()=> dispatch(incrementing)} >increase</button>
        <button id='decrement-btn' onClick={()=> dispatch(decrementing )} > decrease </button>
    </div>
  )
}


export default App;
