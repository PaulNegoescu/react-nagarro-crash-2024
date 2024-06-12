import { useReducer } from 'react';
import clsx from 'clsx';
import styles from './Counter.module.css';


function countReducer(oldCount: number, action: {type: 'update' | 'set', payload: number}): number {
  let newCount = oldCount;
  switch(action.type) {
    case 'update': 
      newCount = oldCount + action.payload;
      break;
  case 'set': 
      newCount = action.payload;
      break;
  }
  return newCount;
}

interface Props {
  initialCount: number;
}

export function Counter2({ initialCount }: Props) {
  const [count, dispatch] = useReducer(countReducer, initialCount);

  return (
    <div>
      <h1>Counter 2</h1>
      <output className={clsx({ [styles.positive]: count > 0, [styles.negative]: count < 0 })}>
        {count}
      </output>
      <p>
        <button onClick={() => dispatch({type: 'update', payload: -5})}>-5</button>
        <button onClick={() => dispatch({type: 'update', payload: -1})}>-</button>
        <button onClick={() => dispatch({type: 'set', payload: initialCount})}>Reset</button>
        <button onClick={() => dispatch({type: 'update', payload: 1})}>+</button>
        <button onClick={() => dispatch({type: 'update', payload: 5})}>+ 5</button>
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
