import React from 'react';
import ButtonComponent from './ButtonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// import { FaTwitter } from 'react-icons/fab';
const TwitterComponent = () => {
  return (
    <div className='task3-twitter-component'>
      <FontAwesomeIcon icon={faTwitter} className='task3-icon' />
      <h2>Happening now</h2>
      <h5>Join Twitter today</h5>
      <ButtonComponent text='Sign up' className='task3-primary-button' />
      <br />
      <ButtonComponent text='Log in' className='task3-secondary-button' />
    </div>
  );
};

export default TwitterComponent;
