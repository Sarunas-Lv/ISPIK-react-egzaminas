import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className='task1-button'>
        <ul>
          <li>
            <Link to='/'>Go back</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
