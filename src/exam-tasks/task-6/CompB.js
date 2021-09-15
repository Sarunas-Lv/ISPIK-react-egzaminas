import React, { useState, useContext } from 'react';
import { ClicksContext } from './Task6';
function CompB() {
  // hooks
  //  -- state
  // -- global
  const clicksContext = useContext(ClicksContext);
  const { dispatch } = clicksContext;
  // -- local
  const [componentClicks, setComponentClicks] = useState(0);
  const [oponentClicks, setOponentClicks] = useState(0);
  // custonm functions
  const addClick = () => {
    // changing global state
    dispatch({ type: 'INCRIMENT' });
    // changing local state
    setComponentClicks(componentClicks + 1);
  };
  const subtractClick = () => {
    // changing global state
    dispatch({ type: 'DECREMENT' });
    // changing local state
    setOponentClicks(oponentClicks + 1);
  };
  return (
    <div>
      <h5>CompB</h5>
      <button className='addButton' onClick={addClick}>
        Clicked : {componentClicks}
      </button>
      <button className='subtractButton' onClick={subtractClick}>
        Clicked: {oponentClicks}
      </button>
    </div>
  );
}

export default CompB;
