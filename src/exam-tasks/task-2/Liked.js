import React, { useState, useRef } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
const Liked = () => {
  // hooks
  // --states
  //---local
  const [thubsUp, setThubsUp] = useState(12);
  const [thubsDown, setThubsDown] = useState(2);
  // refs
  let liked = useRef(false);
  let disliked = useRef(false);
  // custom functions
  const likeHandler = () => {
    if (!liked.current) {
      setThubsUp(thubsUp + 1);
      liked.current = true;
      disliked.current = false;
      setThubsDown(thubsDown - 1);
    }
    return;
  };
  const dislikeHandler = () => {
    if (!disliked.current) {
      setThubsDown(thubsDown + 1);
      disliked.current = true;
      liked.current = false;
      setThubsUp(thubsUp - 1);
    }
    return;
  };
  return (
    <div className='task2-container'>
      <button className='task2-group' onClick={likeHandler}>
        <FaThumbsUp />
        {thubsUp}
      </button>
      <button className='task2-group' onClick={dislikeHandler}>
        <FaThumbsDown />
        {thubsDown}
      </button>
    </div>
  );
};

export default Liked;
