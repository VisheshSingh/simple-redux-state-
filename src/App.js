import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import increment from './actions/increment.js';
import decrement from './actions/decrement.js';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 className="center purple-text darken-3">Redux</h1>
      <div className="container">
        <h3>Counter: {counter}</h3>
        <div className="section">
          <button
            className="btn purple darken-2"
            onClick={() => dispatch(increment(2))}
          >
            +
          </button>{' '}
          &nbsp;
          <button
            className="btn purple lighten-2"
            onClick={() => dispatch(decrement(1))}
          >
            -
          </button>
        </div>
        <div className="divider" />
        <div className="section">
          <button
            className="btn purple"
            onClick={() => dispatch({ type: 'SIGN IN' })}
          >
            Log In
          </button>
          {isLoggedIn ? <p>Data only visible to authenticated users!</p> : ''}
        </div>
      </div>
    </div>
  );
}

export default App;
