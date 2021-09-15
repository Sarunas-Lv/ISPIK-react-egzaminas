// imports
import React, { useReducer } from 'react';
// Components
import CompA from './CompA';
import CompB from './CompB';
// Context (for managing global state)
export const ClicksContext = React.createContext();

// useReducer inital state
const initialClickState = { clicks: 0, message: '' };
// useReducer reducer funtion to manage initialClickState
const clickReducer = (state, action) => {
  switch (action.type) {
    case 'INCRIMENT':
      if (state.clicks < 100) return { ...state, clicks: state.clicks + 10 };
      return { ...state, message: 'Didinti nebegalima' };
    case 'DECREMENT':
      if (state.clicks === 100)
        return { clicks: state.clicks - 10, message: '' };
      return { ...state, clicks: state.clicks - 10 };
    default:
      return state;
  }
};
function Task6() {
  const [state, dispatch] = useReducer(clickReducer, initialClickState);

  return (
    <div className='task6-div'>
      <ClicksContext.Provider value={{ state, dispatch }}>
        <h3>Task 6</h3>
        <h3 className='counter'>
          Counter <u>{state.clicks}</u>
          <i>{state.message}</i>
        </h3>
        <CompA />
        <CompB />
      </ClicksContext.Provider>
    </div>
  );
}

export default Task6;

/* Task 6
task-6 aplanke rasite kelis komponetus. Task6 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>).

Task6 komponentų medis
- CompA
-- CompA1
- CompB

Task6 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

*/
