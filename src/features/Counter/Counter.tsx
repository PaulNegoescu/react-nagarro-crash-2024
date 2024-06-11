import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <output>{ count }</output>
      <p>
        <button onClick={() => setCount(count-1)}>-</button>
        <button onClick={() => setCount(3)}>+</button>
      </p>
    </div>
  )
}

// return (
// React.createElement('h1' ...);
// React.createElement('output', ...);
// );

// let state;
// function myUseState(initialState) {
//   if(!state) {
//     state = initialState;
//   }

//   function updateState(newState) {
//     state = newState;
//     Counter();
//   }
  
//   return [state, updateState];
// }
