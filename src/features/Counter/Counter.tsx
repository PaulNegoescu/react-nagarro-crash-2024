import { useState } from 'react';
import clsx from 'clsx';
import styles from './Counter.module.css';

const initialCount = 0;

export function Counter() {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h1>Counter</h1>
      <output className={clsx({ [styles.positive]: count > 0, [styles.negative]: count < 0 })}>
        {count}
      </output>
      <p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>
    </div>
  );
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
